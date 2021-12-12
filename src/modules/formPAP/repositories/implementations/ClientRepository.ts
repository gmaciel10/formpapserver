import { getRepository, Repository } from "typeorm";

import { Address } from "../../entities/Address";
import { Client } from "../../entities/Client";
import { ICreateClientDTO, IClientRepository } from "../IClientRepository";
import { AddressRepository } from "./AddressRepository";

class ClientRepository implements IClientRepository {
    private repository: Repository<Client>;
    private repositoryAd: Repository<Address>;

    constructor() {
        this.repository = getRepository(Client);
        this.repositoryAd = getRepository(Address);
    }
    async create({
        name,
        document,
        phoneA,
        phoneB,
        email,
        schooling,
        frontDocument,
        backDocument,
        selfieDocument,
        fkIdAddress,
    }: ICreateClientDTO): Promise<void> {
        const client = this.repository.create({
            name,
            document,
            phoneA,
            phoneB,
            email,
            schooling,
            frontDocument,
            backDocument,
            selfieDocument,
            fkIdAddress,
        });
        await this.repository.save(client);
    }
    async list(): Promise<Client[]> {
        const clients = await this.repository.find();
        return clients;
    }
}

export { ClientRepository };
