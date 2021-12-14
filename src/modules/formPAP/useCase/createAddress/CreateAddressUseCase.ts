import { response } from "express";
import { inject, injectable } from "tsyringe";

import { Address } from "../../entities/Address";
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
    }: ICreateAddressDTO): Promise<Address> {
        const address = await this.addressRepository.create({
            postalCode,
            district,
            street,
            number,
            complement,
            condominium,
            fkIdCity,
        });
        return address;
    }
}

export { CreateAddressUseCase };
