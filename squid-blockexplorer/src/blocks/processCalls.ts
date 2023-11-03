import { CallItem } from '../processor';
import { Block, Account } from '../model';
import { createExtrinsic, createCall } from './utils';
import { ExtrinsicsMap, CallsMap } from './types';

export function processExtrinsicsFactory(getOrCreateAccount: (blockHeight: bigint, accountId: string) => Promise<Account>,  addExtrinsicModuleName: (name:string) => Promise<void>) {
  return async function processExtrinsics(extrinsicsMap: ExtrinsicsMap, callsMap: CallsMap, calls: CallItem[], block: Block) {
    for (const item of calls) {
      let signer = null;
      let signature = null;

      
      if (item.extrinsic.signature) {
        signer = await getOrCreateAccount(block.height, item.extrinsic.signature.address);
        signature = item.extrinsic.signature.signature;
      }
      await addExtrinsicModuleName(item.name);
      const extrinsic = createExtrinsic(item, block, signature, signer);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const call = createCall(item, block, extrinsic!, null);
      extrinsicsMap.set(extrinsic.id, extrinsic);
      callsMap.set(call.id, call);
    }
  };
}

export async function processCalls(extrinsicsMap: ExtrinsicsMap, callsMap: CallsMap, calls: CallItem[], block: Block) {
  for (const item of calls) {
    const extrinsic = extrinsicsMap.get(item.extrinsic.id);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const parent = callsMap.get(item.call.parent!.id);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const call = createCall(item, block, extrinsic!, parent!);
    callsMap.set(call.id, call);
  }
}
