import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateAttemptAttendance1637873864271
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "attendanceAttempt",

                columns: [
                    {
                        name: "idAttendanceAttempt",

                        type: "int",

                        isPrimary: true,

                        isGenerated: true,

                        generationStrategy: "increment",
                    },

                    {
                        name: "fkIdAttendance",

                        type: "int",
                    },

                    {
                        name: "fkIdAttempt",

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

        await queryRunner.createForeignKey(
            "attendanceAttempt",

            new TableForeignKey({
                name: "fkAttendanceAttempt",

                referencedTableName: "attendance",

                referencedColumnNames: ["idAttendance"],

                columnNames: ["fkIdAttendance"],

                onDelete: "CASCADE",

                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "attendanceAttempt",

            new TableForeignKey({
                name: "fkAttemptAttendance",

                referencedTableName: "attempt",

                referencedColumnNames: ["idAttempt"],

                columnNames: ["fkIdAttempt"],

                onDelete: "CASCADE",

                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "attendanceAttempt",

            "fkAttendanceAttempt"
        );

        await queryRunner.dropForeignKey(
            "attendanceAttempt",

            "fkAttemptAttendance"
        );

        await queryRunner.dropTable("attendanceAttempt");
    }
}
