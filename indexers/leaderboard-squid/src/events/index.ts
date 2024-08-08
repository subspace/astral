import type { ApiPromise } from "@autonomys/auto-utils";
import type { CtxBlock, CtxEvent } from "../processor";
import { events } from "../types";
import { Cache } from "../utils/cache";
import {
  processFarmerBlockRewardEvent,
  processFarmerVoteRewardEvent,
} from "./farmer";
import {
  processBundleStoredEvent,
  processOperatorNominatedEvent,
  processOperatorRegisteredEvent,
  processOperatorRewardedEvent,
  processOperatorTaxCollectedEvent,
  processWithdrewStakeEvent,
} from "./staking";

export async function processEvents(
  cache: Cache,
  api: ApiPromise,
  block: CtxBlock,
  events: CtxEvent[]
) {
  for (let event of events) {
    cache = await processEvent(cache, api, block, event);
  }
  return cache;
}

async function processEvent(
  cache: Cache,
  api: ApiPromise,
  block: CtxBlock,
  event: CtxEvent
) {
  switch (event.name) {
    // farmer events
    case events.rewards.voteReward.name:
      return processFarmerVoteRewardEvent(cache, block, event);
    case events.rewards.blockReward.name:
      return processFarmerBlockRewardEvent(cache, block, event);
    // operator & nominator events
    case events.domains.operatorRewarded.name:
      return processOperatorRewardedEvent(cache, block, event);
    case events.domains.operatorTaxCollected.name:
      return processOperatorTaxCollectedEvent(cache, block, event);
    case events.domains.bundleStored.name:
      return processBundleStoredEvent(cache, block, event);
    case events.domains.operatorRegistered.name:
      return processOperatorRegisteredEvent(cache, block, event);
    case events.domains.operatorNominated.name:
      return processOperatorNominatedEvent(cache, block, event);
    case events.domains.withdrewStake.name:
      return processWithdrewStakeEvent(cache, block, event);
    case events.domains.storageFeeDeposited.name:
    default:
      return cache;
  }
}
