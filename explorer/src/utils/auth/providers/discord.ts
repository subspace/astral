import { AuthProvider, DEFAULT_GITHUB_TOKEN } from 'constants/session'
import type { TokenSet } from 'next-auth'
import { User } from 'next-auth'
import type { DiscordProfile } from 'next-auth/providers/discord'
import DiscordProvider from 'next-auth/providers/discord'
import { findUserByID, saveUser, updateUser } from 'utils/fauna'
import {
  getUserRoles,
  giveDiscordFarmerRole,
  giveDiscordNominatorRole,
  giveDiscordOperatorRole,
  verifyDiscordFarmerRole,
  verifyDiscordGuildMember,
  verifyDiscordNominatorRole,
  verifyDiscordOperatorRole,
} from '../vcs/discord'
import { verifyToken } from '../verifyToken'

const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = process.env

export const Discord = () => {
  return DiscordProvider({
    // client credentials
    clientId: DISCORD_CLIENT_ID || '',
    clientSecret: DISCORD_CLIENT_SECRET || '',

    // open id connect scopes
    authorization: { params: { scope: 'identify guilds guilds.join guilds.members.read' } },

    // fetch discord profile
    profile: async (profile: DiscordProfile, token: TokenSet) => {
      try {
        if (!token.access_token) throw new Error('No access token')

        const session = verifyToken()
        const did = 'did:openid:discord:' + profile.id

        const member = await verifyDiscordGuildMember(token.access_token)
        const roles = await getUserRoles(token.access_token)
        let farmer = await verifyDiscordFarmerRole(roles)
        let operator = await verifyDiscordOperatorRole(roles)
        let nominator = await verifyDiscordNominatorRole(roles)

        let newRolesAdded = false
        const savedUser = await findUserByID(did)
        // Exit if the Discord ID does not match (prevent a user to link multiple Discord accounts to the same account)
        if (savedUser && savedUser[0].data.discord?.id !== profile.id)
          throw new Error('Discord ID does not match')

        if (session.subspace?.vcs.farmer && !farmer) {
          await giveDiscordFarmerRole(profile.id)
          newRolesAdded = true
        }
        if (session.subspace?.vcs.operator && !operator) {
          await giveDiscordOperatorRole(profile.id)
          newRolesAdded = true
        }
        if (session.subspace?.vcs.nominator && !nominator) {
          await giveDiscordNominatorRole(profile.id)
          newRolesAdded = true
        }
        if (newRolesAdded) {
          const newRoles = await getUserRoles(token.access_token)
          farmer = await verifyDiscordFarmerRole(newRoles)
          operator = await verifyDiscordOperatorRole(newRoles)
          nominator = await verifyDiscordNominatorRole(newRoles)
        }

        const user: User = {
          id: session.id || did,
          DIDs: [...session.DIDs, did],
          subspace: session.subspace,
          discord: {
            id: profile.id,
            username: profile.username,
            vcs: {
              member,
              roles: {
                farmer,
                operator,
                nominator,
              },
            },
          },
          github: session.github || DEFAULT_GITHUB_TOKEN,
        }

        if (!savedUser || savedUser.length === 0) {
          await saveUser(user)

          return user
        }
        await updateUser(
          savedUser[0].ref,
          savedUser[0].data,
          AuthProvider.discord,
          user.discord ?? {},
        )

        return {
          ...savedUser[0].data,
          [AuthProvider.subspace]: user[AuthProvider.subspace],
        }
      } catch (error) {
        console.error('Error fetching Discord profile:', error)
        throw new Error('Failed to fetch Discord profile')
      }
    },
  })
}
