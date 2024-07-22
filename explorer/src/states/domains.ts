import type { Domain } from 'types/domain'
import { bigIntDeserializer, bigIntSerializer } from 'utils/number'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface DomainsDefaultState {
  domains: Domain[]
  minOperatorStake: number
}

interface DomainsState extends DomainsDefaultState {
  setDomains: (domains: Domain[]) => void
  setMinOperatorStake: (minOperatorStake: number) => void
  clear: () => void
}

const initialState: DomainsDefaultState = {
  domains: [],
  minOperatorStake: 0,
}

export const useDomainsStates = create<DomainsState>()(
  persist(
    (set) => ({
      ...initialState,
      setDomains: (domains) => set(() => ({ domains })),
      setMinOperatorStake: (minOperatorStake) => set(() => ({ minOperatorStake })),
      clear: () => set(() => ({ ...initialState })),
    }),
    {
      name: 'domains-storage',
      version: 3,
      storage: createJSONStorage(() => localStorage),
      serialize: (state) => JSON.stringify(state, bigIntSerializer),
      deserialize: (str) => JSON.parse(str, bigIntDeserializer),
    },
  ),
)
