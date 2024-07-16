import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class StatsPerOperator {
    constructor(props?: Partial<StatsPerOperator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: false})
    domainId!: number

    @Index_()
    @IntColumn_({nullable: false})
    operatorId!: number

    @Index_()
    @IntColumn_({nullable: false})
    blockNumber!: number

    @IntColumn_({nullable: false})
    totalNominators!: number

    @BigIntColumn_({nullable: false})
    totalStaked!: bigint

    @BigIntColumn_({nullable: false})
    totalFees!: bigint

    @BigIntColumn_({nullable: false})
    totalDeposits!: bigint

    @BigIntColumn_({nullable: false})
    totalWithdrawals!: bigint

    @BigIntColumn_({nullable: false})
    allTimeHighStaked!: bigint

    @Index_()
    @DateTimeColumn_({nullable: false})
    timestamp!: Date
}
