import { inject, injectable } from "tsyringe";

import { IAddressRepository } from "../../repositories/IAddressRepository";
import {
    IClientRepository,
    ICreateClientDTO,
} from "../../repositories/IClientRepository";

@injectable()
class CreateClientUseCase {
    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository,

        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}
    async execute({
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
        this.clientRepository.create({
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
    }
}

export { CreateClientUseCase };
