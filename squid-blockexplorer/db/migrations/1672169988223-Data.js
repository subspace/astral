module.exports = class Data1672169988223 {
    name = 'Data1672169988223'

    async up(db) {
        await db.query(`CREATE TABLE "call" ("id" character varying NOT NULL, "name" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "success" boolean NOT NULL, "args" jsonb, "error" jsonb, "signer" text, "pos" integer, "block_id" character varying, "extrinsic_id" character varying, "parent_id" character varying, CONSTRAINT "PK_2098af0169792a34f9cfdd39c47" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_bd3f11fd4110d60ac8b96cd62f" ON "call" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_dde30e4f2c6a80f9236bfdf259" ON "call" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_11c1e76d5be8f04c472c4a05b9" ON "call" ("parent_id") `)
        await db.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "index_in_block" integer NOT NULL, "name" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "phase" text NOT NULL, "pos" integer, "args" jsonb, "block_id" character varying, "extrinsic_id" character varying, "call_id" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2b0d35d675c4f99751855c4502" ON "event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_129efedcb305c80256db2d57a5" ON "event" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_83cf1bd59aa4521ed882fa5145" ON "event" ("call_id") `)
        await db.query(`CREATE TABLE "log" ("id" character varying NOT NULL, "kind" text NOT NULL, "value" jsonb, "block_id" character varying, CONSTRAINT "PK_350604cbdf991d5930d9e618fbd" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7d3f5ac68148194ee7ced3032e" ON "log" ("block_id") `)
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "height" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "hash" text NOT NULL, "parent_hash" text NOT NULL, "spec_id" text NOT NULL, "state_root" text NOT NULL, "extrinsic_root" text, "space_pledged" numeric NOT NULL, "blockchain_size" numeric NOT NULL, "extrinsics_count" integer NOT NULL, "events_count" integer NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_bce676e2b005104ccb768495db" ON "block" ("height") `)
        await db.query(`CREATE TABLE "extrinsic" ("id" character varying NOT NULL, "hash" text NOT NULL, "index_in_block" integer NOT NULL, "nonce" numeric, "name" text NOT NULL, "signature" text, "error" jsonb, "tip" numeric, "fee" numeric, "success" boolean NOT NULL, "pos" integer, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "args" jsonb, "signer_id" character varying, "block_id" character varying, CONSTRAINT "PK_80d7db0e4b1e83e30336bc76755" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_886be421c92f221ac8234c6624" ON "extrinsic" ("signer_id") `)
        await db.query(`CREATE INDEX "IDX_29ac1ee135f61e5f2e476d3e22" ON "extrinsic" ("signature") `)
        await db.query(`CREATE INDEX "IDX_a3b99daba1259dab0dd040d4f7" ON "extrinsic" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_6e232918078798b1fade21dcf8" ON "extrinsic" ("timestamp") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "free" numeric, "reserved" numeric, "total" numeric, "updated_at" numeric, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3756b99a2c20a91a19196cbc11" ON "account" ("total") `)
        await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_bd3f11fd4110d60ac8b96cd62f3" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_dde30e4f2c6a80f9236bfdf2590" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_11c1e76d5be8f04c472c4a05b95" FOREIGN KEY ("parent_id") REFERENCES "call"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_2b0d35d675c4f99751855c45021" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_129efedcb305c80256db2d57a59" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_83cf1bd59aa4521ed882fa51452" FOREIGN KEY ("call_id") REFERENCES "call"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "log" ADD CONSTRAINT "FK_7d3f5ac68148194ee7ced3032e2" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_886be421c92f221ac8234c6624c" FOREIGN KEY ("signer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "call"`)
        await db.query(`DROP INDEX "public"."IDX_bd3f11fd4110d60ac8b96cd62f"`)
        await db.query(`DROP INDEX "public"."IDX_dde30e4f2c6a80f9236bfdf259"`)
        await db.query(`DROP INDEX "public"."IDX_11c1e76d5be8f04c472c4a05b9"`)
        await db.query(`DROP TABLE "event"`)
        await db.query(`DROP INDEX "public"."IDX_2b0d35d675c4f99751855c4502"`)
        await db.query(`DROP INDEX "public"."IDX_129efedcb305c80256db2d57a5"`)
        await db.query(`DROP INDEX "public"."IDX_83cf1bd59aa4521ed882fa5145"`)
        await db.query(`DROP TABLE "log"`)
        await db.query(`DROP INDEX "public"."IDX_7d3f5ac68148194ee7ced3032e"`)
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_bce676e2b005104ccb768495db"`)
        await db.query(`DROP TABLE "extrinsic"`)
        await db.query(`DROP INDEX "public"."IDX_886be421c92f221ac8234c6624"`)
        await db.query(`DROP INDEX "public"."IDX_29ac1ee135f61e5f2e476d3e22"`)
        await db.query(`DROP INDEX "public"."IDX_a3b99daba1259dab0dd040d4f7"`)
        await db.query(`DROP INDEX "public"."IDX_6e232918078798b1fade21dcf8"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP INDEX "public"."IDX_3756b99a2c20a91a19196cbc11"`)
        await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_bd3f11fd4110d60ac8b96cd62f3"`)
        await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_dde30e4f2c6a80f9236bfdf2590"`)
        await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_11c1e76d5be8f04c472c4a05b95"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_2b0d35d675c4f99751855c45021"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_129efedcb305c80256db2d57a59"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_83cf1bd59aa4521ed882fa51452"`)
        await db.query(`ALTER TABLE "log" DROP CONSTRAINT "FK_7d3f5ac68148194ee7ced3032e2"`)
        await db.query(`ALTER TABLE "extrinsic" DROP CONSTRAINT "FK_886be421c92f221ac8234c6624c"`)
        await db.query(`ALTER TABLE "extrinsic" DROP CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74"`)
    }
}
