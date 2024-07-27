import type { ApiPromise } from "@autonomys/auto-utils";
import type { ApiDecoration } from "@polkadot/api/types";
import { Store } from "@subsquid/typeorm-store";
import { processExtrinsics } from "../extrinsics";
import type { Ctx, CtxBlock } from "../processor";
import { Cache, load } from "../utils/cache";

export async function processBlocks(ctx: Ctx<Store>, api: ApiPromise) {
  let cache: Cache = await load(ctx);

  for (let block of ctx.blocks) {
    const apiAt = await api.at(block.header.hash);
    cache = await processBlock(cache, apiAt, block);
  }

  return cache;
}

async function processBlock(
  cache: Cache,
  apiAt: ApiDecoration<"promise">,
  block: CtxBlock
) {
  return await processExtrinsics(cache, apiAt, block, block.extrinsics);
}
