import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterRelationShip1637695967859 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query("ALTER TABLE `client` ADD `fkIdAddress` INT");

        await queryRunner.query(
            "ALTER TABLE `client` ADD CONSTRAINT `FK_AddressClient` FOREIGN KEY (`fkIdAddress`) REFERENCES `address`(`idAddress`) ON DELETE CASCADE ON UPDATE CASCADE"
        );
        await queryRunner.query(
            "ALTER TABLE `address` ADD CONSTRAINT `FK_CityAddress` FOREIGN KEY (`fkIdCity`) REFERENCES `city`(`idCity`) ON DELETE CASCADE ON UPDATE CASCADE"
        );
        await queryRunner.query(
            "ALTER TABLE `attendance` ADD CONSTRAINT `FK_ClientAttendance` FOREIGN KEY (`fkIdClient`) REFERENCES `client`(`idClient`) ON DELETE CASCADE ON UPDATE CASCADE"
        );
        await queryRunner.query(
            "ALTER TABLE `attendance` ADD CONSTRAINT `FK_SalesmanAttendance` FOREIGN KEY (`fkIdSalesman`) REFERENCES `salesman`(`idSalesman`) ON DELETE CASCADE ON UPDATE CASCADE"
        );
        await queryRunner.query(
            "ALTER TABLE `salesman` ADD CONSTRAINT `FK_UserSalesman` FOREIGN KEY (`fkIdUser`) REFERENCES `user`(`idUser`) ON DELETE CASCADE ON UPDATE CASCADE"
        );
        await queryRunner.query(
            "ALTER TABLE `attempt` ADD CONSTRAINT `FK_SalesmanAttempt` FOREIGN KEY (`fkIdSalesman`) REFERENCES `salesman`(`idSalesman`) ON DELETE CASCADE ON UPDATE CASCADE"
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `client` DROP FOREIGN KEY `FK_AddressClient`"
        );
        await queryRunner.query(
            "ALTER TABLE `client` DROP INDEX `FK_AddressClient`"
        );
        await queryRunner.query(
            "ALTER TABLE `address` DROP CONSTRAINT `FK_CityAddress`"
        );
        await queryRunner.query(
            "ALTER TABLE `address` DROP INDEX `FK_CityAddress`"
        );
        await queryRunner.query(
            "ALTER TABLE `attendance` DROP CONSTRAINT `FK_ClientAttendance`"
        );
        await queryRunner.query(
            "ALTER TABLE `attendance` DROP INDEX `FK_ClientAttendance`"
        );
        await queryRunner.query(
            "ALTER TABLE `attendance` DROP CONSTRAINT `FK_SalesmanAttendance`"
        );
        await queryRunner.query(
            "ALTER TABLE `attendance` DROP INDEX `FK_SalesmanAttendance`"
        );
        await queryRunner.query(
            "ALTER TABLE `salesman` DROP CONSTRAINT `FK_UserSalesman`"
        );
        await queryRunner.query(
            "ALTER TABLE `salesman` DROP INDEX `FK_UserSalesman`"
        );
        await queryRunner.query(
            "ALTER TABLE `attempt` DROP CONSTRAINT `FK_SalesmanAttempt`"
        );
        await queryRunner.query(
            "ALTER TABLE `attempt` DROP INDEX `FK_SalesmanAttempt`"
        );
    }
}
