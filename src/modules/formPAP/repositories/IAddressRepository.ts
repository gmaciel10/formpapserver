import { ICreateAddressDTO } from "../dtos/ICreateAddressDTO";
import { Address } from "../entities/Address";

interface IAddressRepository {
    create({
        postalCode,
        district,
        street,
        number,
        complement,
        condominium,
        fkIdCity,
    }: ICreateAddressDTO): Promise<number>;
    list(): Promise<Address[]>;
    listId(): Promise<number>;
}

export { ICreateAddressDTO, IAddressRepository };
