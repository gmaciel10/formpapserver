import { response } from "express";
import { inject, injectable } from "tsyringe";

import {
    IAddressRepository,
    ICreateAddressDTO,
} from "../../repositories/IAddressRepository";
import { ICityRepository } from "../../repositories/ICityRepository";

@injectable()
class CreateAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({
        postalCode,
        district,
        street,
        number,
        complement,
        condominium,
        fkIdCity,
    }: ICreateAddressDTO): Promise<void> {
        const address = await this.addressRepository.create({
            postalCode,
            district,
            street,
            number,
            complement,
            condominium,
            fkIdCity,
        });
    }
}

export { CreateAddressUseCase };
