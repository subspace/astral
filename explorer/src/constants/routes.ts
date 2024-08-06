export enum Routes {
  consensus = 'consensus',
  farming = 'farming',
  staking = 'staking',
  leaderboard = 'leaderboard',
  domains = 'domains',
  nova = 'nova',
  autoid = 'autoid',
  transfer = 'transfer',
  swap = 'swap',
  // Route deactivated till bugs are fixed and feature is ready
  // stake = 'stake',
}

export const ROUTES = [
  {
    name: Routes.consensus,
    title: 'Consensus Chain',
  },
  {
    name: Routes.farming,
    title: 'Farming',
  },
  {
    name: Routes.staking,
    title: 'Staking',
  },
  {
    name: Routes.leaderboard,
    title: 'Leaderboard',
  },
  {
    name: Routes.domains,
    title: 'Domains',
    children: [
      {
        name: Routes.nova,
        title: 'Nova',
      },
      {
        name: Routes.autoid,
        title: 'Auto-ID',
      },
    ],
  },
  {
    name: Routes.swap,
    title: 'Transfer / Swap',
    alias: [Routes.transfer],
  },
  // Route deactivated till bugs are fixed and feature is ready
  // {
  //   name: Routes.stake,
  //   title: 'Stake Wars',
  // },
]

export const EXTERNAL_ROUTES = {
  autonomys: 'https://autonomys.xyz/',
  academy: 'https://academy.autonomys.xyz/',
  subspacePrivacyPolicy: 'https://subspace.network/gdpr-privacy-statement',
  forum: 'https://forum.autonomys.xyz/',
  gemini2guide:
    'https://forum.autonomys.xyz/t/how-to-check-your-balance-for-gemini-ii-incentivized-testnet/1081',
  docs: 'https://docs.autonomys.xyz/',
  operatorDocs:
    'https://docs.autonomys.xyz/docs/farming-&-staking/staking/operators/register-operator',
  social: {
    twitter: 'https://x.com/AutonomysNet',
    discord: 'https://discord.gg/subspace-network',
    telegram: 'https://t.me/subspace_network',
    github: 'https://github.com/autonomys',
    reddit: 'https://www.reddit.com/r/sub',
    medium: 'https://medium.com/subspace-network',
    youtube: 'https://www.youtube.com/@AutonomysNetwork',
    linkedin: 'https://www.linkedin.com/company/autonomys/',
    subSocial: 'https://app.subsocial.network/@NetworkSubspace',
  },
  novaExplorer: 'https://nova.subspace.network/',
  polkadot:
    'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3h.subspace.network%2Fws#/explorer',
  subscan: 'https://subspace.subscan.io/',
  spaceAcres: 'https://api.github.com/repos/subspace/space-acres/releases/latest',
}

export const INTERNAL_ROUTES = {
  home: '/',
  blocks: {
    id: {
      path: ':blockId',
      page: (chain: string, domain: string, blockId: number): string =>
        `/${chain}/${domain}/blocks/${blockId}`,
    },
    list: 'blocks',
  },
  accounts: {
    list: 'accounts',
    id: {
      path: ':accountId',
      page: (chain: string, domain: string, accountId: string): string =>
        `/${chain}/${domain}/accounts/${accountId}`,
    },
    rewards: {
      path: ':accountId/rewards',
      page: (chain: string, domain: string, accountId: string): string =>
        `/${chain}/${domain}/accounts/${accountId}/rewards`,
    },
  },
  events: {
    id: {
      path: ':eventId',
      page: (chain: string, domain: string, eventId: string): string =>
        `/${chain}/${domain}/events/${eventId}`,
    },
    list: 'events',
  },
  extrinsics: {
    id: {
      path: ':extrinsicId',
      page: (chain: string, domain: string, extrinsicId: string): string =>
        `/${chain}/${domain}/extrinsics/${extrinsicId}`,
    },
    list: 'extrinsics',
  },
  logs: {
    id: {
      path: ':logId',
      page: (chain: string, domain: string, logId: string): string =>
        `/${chain}/${domain}/logs/${logId}`,
    },
    list: 'logs',
  },
  operators: {
    id: {
      path: ':operatorId',
      page: (chain: string, domain: string, operatorId: string): string =>
        `/${chain}/${domain}/${operatorId}`,
    },
    list: 'list',
    register: 'register',
  },
  search: {
    result: {
      path: 'search/result/:type',
      page: (chain: string, domain: string, type: string): string =>
        `/${chain}/${domain}/search/result/${type}`,
    },
    empty: (chain: string, domain: string): string => `/${chain}/${domain}/search/no-result-found`,
  },
  leaderboard: {
    farmers: 'farmers',
    operators: 'operators',
    nominators: 'nominators',
  },
  notFound: '/404',
  catchAll: '*',
}

export enum API_ROUTES {
  Auth = 'auth',
  Claim = 'claim',
}

export enum CLAIM_TYPES {
  OperatorDisbursement = 'operator-disbursement',
}

export const ROUTE_API = {
  claim: {
    operatorDisbursement: (chain: string): string =>
      `/api/${API_ROUTES.Claim}/${chain}/${CLAIM_TYPES.OperatorDisbursement}`,
  },
}

export enum ROUTE_EXTRA_FLAG_TYPE {
  WALLET = 'wallet',
  WALLET_SIDEKICK = 'walletSidekick',
}

export enum ROUTE_FLAG_VALUE_OPEN_CLOSE {
  CLOSE = 'close',
  OPEN = 'open',
}

export const ROUTE_EXTRA_FLAGS = {
  wallet: ROUTE_FLAG_VALUE_OPEN_CLOSE,
  walletSidekick: ROUTE_FLAG_VALUE_OPEN_CLOSE,
}
