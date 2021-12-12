import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClient1637671723940 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "client",

                columns: [
                    {
                        name: "idClient",

                        type: "int",

                        isPrimary: true,

                        isGenerated: true,

                        generationStrategy: "increment",
                    },

                    {
                        name: "name",

                        type: "varchar",
                    },

                    {
                        name: "document",

                        type: "varchar",
                    },

                    {
                        name: "phoneA",

                        type: "varchar",
                    },

                    {
                        name: "phoneB",

                        type: "varchar",
                    },

                    {
                        name: "email",

                        type: "varchar",
                    },

                    {
                        name: "schooling",

                        type: "enum('SIM','NÃO')",
                    },

                    {
                        name: "frontDocument",

                        type: "varchar",
                    },

                    {
                        name: "backDocument",

                        type: "varchar",
                    },

                    {
                        name: "selfieDocument",

                        type: "varchar",
                    },

                    {
                        name: "fkIdAddress",
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
        await queryRunner.dropTable("client");
    }
}
