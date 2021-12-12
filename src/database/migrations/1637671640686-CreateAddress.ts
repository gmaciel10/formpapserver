import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1637671640686 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "address",

                columns: [
                    {
                        name: "idAddress",

                        type: "int",

                        isPrimary: true,

                        isGenerated: true,

                        generationStrategy: "increment",
                    },

                    {
                        name: "postalCode",

                        type: "varchar",
                    },

                    {
                        name: "district",

                        type: "varchar",
                    },

                    {
                        name: "street",

                        type: "varchar",
                    },

                    {
                        name: "number",

                        type: "int",
                    },

                    {
                        name: "complement",

                        type: "varchar",
                    },

                    {
                        name: "condominium",

                        type: "varchar",
                    },

                    {
                        name: "fkIdCity",
                        type: "int",
                        isNullable: true,
                    },

                    {
                        name: "created_at",

                        type: "timestamp",

                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address");
    }
}
