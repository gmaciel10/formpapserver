import { getRepository, Repository } from "typeorm";

import { Address } from "../../entities/Address";
import { IAddressRepository, ICreateAddressDTO } from "../IAddressRepository";

class AddressRepository implements IAddressRepository {
    private repository: Repository<Address>;

    constructor() {
        this.repository = getRepository(Address);
    }
    async create({
        postalCode,
        district,
        street,
        number,
        complement,
        condominium,
        fkIdCity,
    }: ICreateAddressDTO): Promise<void> {
        const addressR = this.repository.create({
            postalCode,
            district,
            street,
            number,
            complement,
            condominium,
            fkIdCity,
        });
        await this.repository.save(addressR);
    }

    async list(): Promise<Address[]> {
        const allAddress = await this.repository.find();
        return allAddress;
    }
    async listId(): Promise<number> {
        const fkIdAddress = await this.repository.findOne({
            order: {
                idAddress: "DESC",
            },
        });
        return fkIdAddress.idAddress;
    }
}
export { AddressRepository };
