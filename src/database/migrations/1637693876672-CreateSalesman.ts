import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSalesman1637693876672 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "salesman",
                columns: [
                    {
                        name: "idSalesman",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "type",
                        type: "enum('Interno','Externo')",
                    },
                    {
                        name: "fkIdUser",
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
        await queryRunner.dropTable("salesman");
    }
}
