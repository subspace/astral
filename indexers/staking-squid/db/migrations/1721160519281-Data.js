module.exports = class Data1721160519281 {
    name = 'Data1721160519281'

    async up(db) {
        await db.query(`CREATE TABLE "domain" ("id" character varying NOT NULL, "domain_id" integer NOT NULL, "completed_epoch" integer NOT NULL, "updated_at" integer, CONSTRAINT "PK_27e3ec3ea0ae02c8c5bceab3ba9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2bc5e1041a74e1492dfda20688" ON "domain" ("domain_id") `)
        await db.query(`CREATE INDEX "IDX_80867983eb3f6e204acfea4214" ON "domain" ("completed_epoch") `)
        await db.query(`CREATE INDEX "IDX_c3ac554ab7a2ed97d9a0af4083" ON "domain" ("updated_at") `)
        await db.query(`CREATE TABLE "withdrawal" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "account" text NOT NULL, "shares" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "status" text, "operator_id" character varying, "nominator_id" character varying, CONSTRAINT "PK_840e247aaad3fbd4e18129122a2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e8ac24b4a9b9657cd27289feea" ON "withdrawal" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_25c7ac5a7731ac3ce7982bef67" ON "withdrawal" ("account") `)
        await db.query(`CREATE INDEX "IDX_d5f5ce8abff91d6485c4f84e57" ON "withdrawal" ("operator_id") `)
        await db.query(`CREATE INDEX "IDX_09c9cf2ad9a4f3b674540dbfcf" ON "withdrawal" ("nominator_id") `)
        await db.query(`CREATE INDEX "IDX_e2749aaf8ba367458c360a7c73" ON "withdrawal" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_9c33f1820b02bef49172b9883f" ON "withdrawal" ("extrinsic_hash") `)
        await db.query(`CREATE TABLE "nominator" ("id" character varying NOT NULL, "account" text NOT NULL, "shares" numeric NOT NULL, "status" text NOT NULL, "updated_at" integer, "operator_id" character varying, CONSTRAINT "PK_7489b7a79b066f2660eab25f60b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ef8faa81be0a51d54fc727b9fb" ON "nominator" ("account") `)
        await db.query(`CREATE INDEX "IDX_14374f281ccb6e72c55dab3c20" ON "nominator" ("operator_id") `)
        await db.query(`CREATE TABLE "deposit" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "account" text NOT NULL, "amount" numeric NOT NULL, "storage_fee_deposit" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "status" text, "operator_id" character varying, "nominator_id" character varying, CONSTRAINT "PK_6654b4be449dadfd9d03a324b61" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_230a90fc5a10c7ac5ac35397d2" ON "deposit" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_f3abde1e7f8d7ca5102e376219" ON "deposit" ("account") `)
        await db.query(`CREATE INDEX "IDX_c2f2cfaa2b294c75d38a57e380" ON "deposit" ("operator_id") `)
        await db.query(`CREATE INDEX "IDX_b673efd4ec207b203e4d06abe9" ON "deposit" ("nominator_id") `)
        await db.query(`CREATE INDEX "IDX_a37222607a86476fa124313c51" ON "deposit" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_b1d1dadac59ff00a27b4ef18cf" ON "deposit" ("extrinsic_hash") `)
        await db.query(`CREATE TABLE "operator_reward_event" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "extrinsic_hash" text NOT NULL, "amount" numeric NOT NULL, "operator_id" character varying, CONSTRAINT "PK_721a9f907ad1f01a5abed1f2e8e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b9cf23c6256a9fc7e01a271376" ON "operator_reward_event" ("operator_id") `)
        await db.query(`CREATE INDEX "IDX_2b8b8fd9152da4d7ba4b71080c" ON "operator_reward_event" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_d878c755d920f1be253bad97dd" ON "operator_reward_event" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_83b9c467963de152d3e83dcf58" ON "operator_reward_event" ("extrinsic_hash") `)
        await db.query(`CREATE TABLE "operator_fees_earned" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "updated_at" integer NOT NULL, "operator_id" character varying, CONSTRAINT "PK_65191b997e44f43ec2c5d68c7e1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c9dda7e56175bc755c449c5e02" ON "operator_fees_earned" ("operator_id") `)
        await db.query(`CREATE TABLE "operator" ("id" character varying NOT NULL, "domain_id" integer NOT NULL, "operator_id" integer NOT NULL, "signing_key" text NOT NULL, "operator_owner" text NOT NULL, "minimum_nominator_stake" numeric NOT NULL, "nomination_tax" integer NOT NULL, "tax_collected" numeric NOT NULL, "pending_total_stake" numeric NOT NULL, "pending_storage_fee_deposit" numeric NOT NULL, "current_total_stake" numeric NOT NULL, "current_storage_fee_deposit" numeric NOT NULL, "current_epoch_rewards" numeric NOT NULL, "current_total_shares" numeric NOT NULL, "status" text, "deposits_count" integer NOT NULL, "nominators_count" integer NOT NULL, "withdrawals_count" integer NOT NULL, "bundle_count" integer NOT NULL, "last_bundle_at" integer NOT NULL, "updated_at" integer, CONSTRAINT "PK_8b950e1572745d9f69be7748ae8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1c800426a1f738c1b202ff839f" ON "operator" ("domain_id") `)
        await db.query(`CREATE INDEX "IDX_ca18369599805e0d60e4ac0652" ON "operator" ("operator_id") `)
        await db.query(`CREATE INDEX "IDX_51b6c3609906ff3cd25e39e1b2" ON "operator" ("signing_key") `)
        await db.query(`CREATE INDEX "IDX_5ae5d5e1878c2fbe2edbf18330" ON "operator" ("operator_owner") `)
        await db.query(`CREATE INDEX "IDX_d6d18ca05472785030a7a3963b" ON "operator" ("updated_at") `)
        await db.query(`CREATE TABLE "operator_unlocked_funds" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "nominator_account" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text NOT NULL, "amount" numeric NOT NULL, "operator_id" character varying, "nominator_id" character varying, CONSTRAINT "PK_88e0c471830b6c83ae6df8e561a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c5936076e548d50542cf776289" ON "operator_unlocked_funds" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_8d1c61c4fa2cbdf5da095a3ffd" ON "operator_unlocked_funds" ("operator_id") `)
        await db.query(`CREATE INDEX "IDX_2fff22e92b7b71ed2f39466e57" ON "operator_unlocked_funds" ("nominator_id") `)
        await db.query(`CREATE INDEX "IDX_48c8e45b0ff8c212f11e4a68df" ON "operator_unlocked_funds" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_f01f1314fe38bc670d2a48fe1a" ON "operator_unlocked_funds" ("extrinsic_hash") `)
        await db.query(`CREATE TABLE "stats" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "total_domains" integer NOT NULL, "total_operators" integer NOT NULL, "total_nominators" integer NOT NULL, "total_active_operators" integer NOT NULL, "total_slashed_operators" integer NOT NULL, "total_staked" numeric NOT NULL, "total_fees" numeric NOT NULL, "total_deposits" numeric NOT NULL, "total_withdrawals" numeric NOT NULL, "all_time_high_staked" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0b3890ae3ba62ee77fe94af26e" ON "stats" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_ea4b2bcf5920a1b06f4454bb91" ON "stats" ("timestamp") `)
        await db.query(`CREATE TABLE "stats_per_domain" ("id" character varying NOT NULL, "domain_id" integer NOT NULL, "block_number" integer NOT NULL, "total_operators" integer NOT NULL, "total_nominators" integer NOT NULL, "total_active_operators" integer NOT NULL, "total_slashed_operators" integer NOT NULL, "total_staked" numeric NOT NULL, "total_fees" numeric NOT NULL, "total_deposits" numeric NOT NULL, "total_withdrawals" numeric NOT NULL, "all_time_high_staked" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_0edbe67267dbe09a2a691517eee" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3ac1b575a2dd3f64faedbde14b" ON "stats_per_domain" ("domain_id") `)
        await db.query(`CREATE INDEX "IDX_77118ccf015e661215115daaa5" ON "stats_per_domain" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_8eb7279e3beeab2964a533cd52" ON "stats_per_domain" ("timestamp") `)
        await db.query(`CREATE TABLE "stats_per_operator" ("id" character varying NOT NULL, "domain_id" integer NOT NULL, "operator_id" integer NOT NULL, "block_number" integer NOT NULL, "total_nominators" integer NOT NULL, "total_staked" numeric NOT NULL, "total_fees" numeric NOT NULL, "total_deposits" numeric NOT NULL, "total_withdrawals" numeric NOT NULL, "all_time_high_staked" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_8cff6fe09e3e5510f0c90e42cf5" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4a4bff6af8198a2f145ecf637f" ON "stats_per_operator" ("domain_id") `)
        await db.query(`CREATE INDEX "IDX_466db26acddfccae0a5d487d2c" ON "stats_per_operator" ("operator_id") `)
        await db.query(`CREATE INDEX "IDX_5ff9cc7e82a620057ef84c3826" ON "stats_per_operator" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_3260a5fceb17a3d817e5678d7f" ON "stats_per_operator" ("timestamp") `)
        await db.query(`ALTER TABLE "withdrawal" ADD CONSTRAINT "FK_d5f5ce8abff91d6485c4f84e574" FOREIGN KEY ("operator_id") REFERENCES "operator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "withdrawal" ADD CONSTRAINT "FK_09c9cf2ad9a4f3b674540dbfcf0" FOREIGN KEY ("nominator_id") REFERENCES "nominator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nominator" ADD CONSTRAINT "FK_14374f281ccb6e72c55dab3c209" FOREIGN KEY ("operator_id") REFERENCES "operator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "deposit" ADD CONSTRAINT "FK_c2f2cfaa2b294c75d38a57e380a" FOREIGN KEY ("operator_id") REFERENCES "operator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "deposit" ADD CONSTRAINT "FK_b673efd4ec207b203e4d06abe9c" FOREIGN KEY ("nominator_id") REFERENCES "nominator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "operator_reward_event" ADD CONSTRAINT "FK_b9cf23c6256a9fc7e01a2713761" FOREIGN KEY ("operator_id") REFERENCES "operator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "operator_fees_earned" ADD CONSTRAINT "FK_c9dda7e56175bc755c449c5e02f" FOREIGN KEY ("operator_id") REFERENCES "operator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "operator_unlocked_funds" ADD CONSTRAINT "FK_8d1c61c4fa2cbdf5da095a3ffd0" FOREIGN KEY ("operator_id") REFERENCES "operator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "operator_unlocked_funds" ADD CONSTRAINT "FK_2fff22e92b7b71ed2f39466e57f" FOREIGN KEY ("nominator_id") REFERENCES "nominator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "domain"`)
        await db.query(`DROP INDEX "public"."IDX_2bc5e1041a74e1492dfda20688"`)
        await db.query(`DROP INDEX "public"."IDX_80867983eb3f6e204acfea4214"`)
        await db.query(`DROP INDEX "public"."IDX_c3ac554ab7a2ed97d9a0af4083"`)
        await db.query(`DROP TABLE "withdrawal"`)
        await db.query(`DROP INDEX "public"."IDX_e8ac24b4a9b9657cd27289feea"`)
        await db.query(`DROP INDEX "public"."IDX_25c7ac5a7731ac3ce7982bef67"`)
        await db.query(`DROP INDEX "public"."IDX_d5f5ce8abff91d6485c4f84e57"`)
        await db.query(`DROP INDEX "public"."IDX_09c9cf2ad9a4f3b674540dbfcf"`)
        await db.query(`DROP INDEX "public"."IDX_e2749aaf8ba367458c360a7c73"`)
        await db.query(`DROP INDEX "public"."IDX_9c33f1820b02bef49172b9883f"`)
        await db.query(`DROP TABLE "nominator"`)
        await db.query(`DROP INDEX "public"."IDX_ef8faa81be0a51d54fc727b9fb"`)
        await db.query(`DROP INDEX "public"."IDX_14374f281ccb6e72c55dab3c20"`)
        await db.query(`DROP TABLE "deposit"`)
        await db.query(`DROP INDEX "public"."IDX_230a90fc5a10c7ac5ac35397d2"`)
        await db.query(`DROP INDEX "public"."IDX_f3abde1e7f8d7ca5102e376219"`)
        await db.query(`DROP INDEX "public"."IDX_c2f2cfaa2b294c75d38a57e380"`)
        await db.query(`DROP INDEX "public"."IDX_b673efd4ec207b203e4d06abe9"`)
        await db.query(`DROP INDEX "public"."IDX_a37222607a86476fa124313c51"`)
        await db.query(`DROP INDEX "public"."IDX_b1d1dadac59ff00a27b4ef18cf"`)
        await db.query(`DROP TABLE "operator_reward_event"`)
        await db.query(`DROP INDEX "public"."IDX_b9cf23c6256a9fc7e01a271376"`)
        await db.query(`DROP INDEX "public"."IDX_2b8b8fd9152da4d7ba4b71080c"`)
        await db.query(`DROP INDEX "public"."IDX_d878c755d920f1be253bad97dd"`)
        await db.query(`DROP INDEX "public"."IDX_83b9c467963de152d3e83dcf58"`)
        await db.query(`DROP TABLE "operator_fees_earned"`)
        await db.query(`DROP INDEX "public"."IDX_c9dda7e56175bc755c449c5e02"`)
        await db.query(`DROP TABLE "operator"`)
        await db.query(`DROP INDEX "public"."IDX_1c800426a1f738c1b202ff839f"`)
        await db.query(`DROP INDEX "public"."IDX_ca18369599805e0d60e4ac0652"`)
        await db.query(`DROP INDEX "public"."IDX_51b6c3609906ff3cd25e39e1b2"`)
        await db.query(`DROP INDEX "public"."IDX_5ae5d5e1878c2fbe2edbf18330"`)
        await db.query(`DROP INDEX "public"."IDX_d6d18ca05472785030a7a3963b"`)
        await db.query(`DROP TABLE "operator_unlocked_funds"`)
        await db.query(`DROP INDEX "public"."IDX_c5936076e548d50542cf776289"`)
        await db.query(`DROP INDEX "public"."IDX_8d1c61c4fa2cbdf5da095a3ffd"`)
        await db.query(`DROP INDEX "public"."IDX_2fff22e92b7b71ed2f39466e57"`)
        await db.query(`DROP INDEX "public"."IDX_48c8e45b0ff8c212f11e4a68df"`)
        await db.query(`DROP INDEX "public"."IDX_f01f1314fe38bc670d2a48fe1a"`)
        await db.query(`DROP TABLE "stats"`)
        await db.query(`DROP INDEX "public"."IDX_0b3890ae3ba62ee77fe94af26e"`)
        await db.query(`DROP INDEX "public"."IDX_ea4b2bcf5920a1b06f4454bb91"`)
        await db.query(`DROP TABLE "stats_per_domain"`)
        await db.query(`DROP INDEX "public"."IDX_3ac1b575a2dd3f64faedbde14b"`)
        await db.query(`DROP INDEX "public"."IDX_77118ccf015e661215115daaa5"`)
        await db.query(`DROP INDEX "public"."IDX_8eb7279e3beeab2964a533cd52"`)
        await db.query(`DROP TABLE "stats_per_operator"`)
        await db.query(`DROP INDEX "public"."IDX_4a4bff6af8198a2f145ecf637f"`)
        await db.query(`DROP INDEX "public"."IDX_466db26acddfccae0a5d487d2c"`)
        await db.query(`DROP INDEX "public"."IDX_5ff9cc7e82a620057ef84c3826"`)
        await db.query(`DROP INDEX "public"."IDX_3260a5fceb17a3d817e5678d7f"`)
        await db.query(`ALTER TABLE "withdrawal" DROP CONSTRAINT "FK_d5f5ce8abff91d6485c4f84e574"`)
        await db.query(`ALTER TABLE "withdrawal" DROP CONSTRAINT "FK_09c9cf2ad9a4f3b674540dbfcf0"`)
        await db.query(`ALTER TABLE "nominator" DROP CONSTRAINT "FK_14374f281ccb6e72c55dab3c209"`)
        await db.query(`ALTER TABLE "deposit" DROP CONSTRAINT "FK_c2f2cfaa2b294c75d38a57e380a"`)
        await db.query(`ALTER TABLE "deposit" DROP CONSTRAINT "FK_b673efd4ec207b203e4d06abe9c"`)
        await db.query(`ALTER TABLE "operator_reward_event" DROP CONSTRAINT "FK_b9cf23c6256a9fc7e01a2713761"`)
        await db.query(`ALTER TABLE "operator_fees_earned" DROP CONSTRAINT "FK_c9dda7e56175bc755c449c5e02f"`)
        await db.query(`ALTER TABLE "operator_unlocked_funds" DROP CONSTRAINT "FK_8d1c61c4fa2cbdf5da095a3ffd0"`)
        await db.query(`ALTER TABLE "operator_unlocked_funds" DROP CONSTRAINT "FK_2fff22e92b7b71ed2f39466e57f"`)
    }
}
