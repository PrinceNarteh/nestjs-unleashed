import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategories1713076849568 implements MigrationInterface {
    name = 'CreateCategories1713076849568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "category" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "name" character varying NOT NULL,
                CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"),
                CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "category"
        `);
    }

}
