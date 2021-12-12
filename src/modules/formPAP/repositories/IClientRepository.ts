import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { Address } from "../entities/Address";
import { Client } from "../entities/Client";

interface IClientRepository {
    create({
        name,
        document,
        phoneA,
        phoneB,
        email,
        schooling,
        frontDocument,
        backDocument,
        selfieDocument,
    }: ICreateClientDTO): Promise<void>;
    list(): Promise<Client[]>;
}

export { ICreateClientDTO, IClientRepository };
