import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCity1637684504537 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "city",

                columns: [
                    {
                        name: "idCity",

                        type: "int",

                        isPrimary: true,

                        isGenerated: true,

                        generationStrategy: "increment",
                    },

                    {
                        name: "nameCity",
                        type: "varchar",
                        isUnique: true,
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
        await queryRunner.dropTable("city");
    }
}
