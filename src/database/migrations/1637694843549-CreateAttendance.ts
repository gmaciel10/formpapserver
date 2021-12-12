import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAttendance1637694843549 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "attendance",
                columns: [
                    {
                        name: "idAttendance",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "expirationDate",
                        type: "date",
                    },
                    {
                        name: "periodo",
                        type: "enum('ligar agora', 'manhã', 'tarde', 'noite', 'o dia todo')",
                    },
                    {
                        name: "observation",
                        type: "varchar",
                    },
                    {
                        name: "fkIdClient",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "fkIdSalesman",
                        type: "int",
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
        await queryRunner.dropTable("attendance");
    }
}
