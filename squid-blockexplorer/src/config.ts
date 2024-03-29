import { SubstrateProcessor } from '@subsquid/substrate-processor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
type Parameters<T> = T extends (...args: infer T) => any ? T : never

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

export interface ProcessorConfig {
    chainName: string
    prefix: number | string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataSource: Parameters<SubstrateProcessor<any>['setDataSource']>[HandlerParams.NAME]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typesBundle: Parameters<SubstrateProcessor<any>['setTypesBundle']>[HandlerParams.NAME]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    port?: Parameters<SubstrateProcessor<any>['setPrometheusPort']>[HandlerParams.NAME]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockRange?: Parameters<SubstrateProcessor<any>['setBlockRange']>[HandlerParams.NAME]
}

const config: ProcessorConfig = {
    chainName: 'gemini-3g',
    prefix: 2254,
    dataSource: {
        archive: process.env.ARCHIVE_ENDPOINT as string,
        chain: process.env.CHAIN_RPC_ENDPOINT as string,
    },
    typesBundle: 'gemini-3g',
};

export default config;
