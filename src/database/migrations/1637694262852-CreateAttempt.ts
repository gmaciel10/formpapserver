import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAttempt1637694262852 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "attempt",
                columns: [
                    {
                        name: "idAttempt",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "date",
                        type: "date",
                    },
                    {
                        name: "time",
                        type: "datetime",
                    },
                    {
                        name: "status",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "scheduled",
                        type: "date",
                    },
                    {
                        name: "type",
                        type: "enum('1','2','3')",
                    },
                    {
                        name: "fkIdSalesman",
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
        await queryRunner.dropTable("attempt");
    }
}
