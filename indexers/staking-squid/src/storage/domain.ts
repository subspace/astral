import type { Store } from "@subsquid/typeorm-store";
import { randomUUID } from "crypto";
import { Domain } from "../model";
import type { Ctx, CtxBlock } from "../processor";
import { getOrCreateStats, getOrCreateStatsPerDomain } from "./stats";

export const createDomain = async (
  ctx: Ctx<Store>,
  block: CtxBlock,
  props: Partial<Domain>
): Promise<Domain> => {
  const domain = new Domain({
    id: randomUUID(),
    domainId: 0,
    completedEpoch: 0,
    ...props,
    updatedAt: block.header.height,
  });

  await ctx.store.insert(domain);

  const domainsCount = await ctx.store.count(Domain);
  ctx.log.child("domains").info(`count: ${domainsCount}`);

  const stats = await getOrCreateStats(ctx, block);
  await getOrCreateStatsPerDomain(ctx, block, props.domainId || 0);

  stats.totalDomains += 1;

  await ctx.store.save(stats);

  return domain;
};

export const getOrCreateDomain = async (
  ctx: Ctx<Store>,
  block: CtxBlock,
  domainId: number
): Promise<Domain> => {
  const domain = await ctx.store.findOneBy(Domain, { domainId });

  if (!domain) return await createDomain(ctx, block, { domainId });

  return domain;
};
