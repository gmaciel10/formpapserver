import { inject, injectable } from "tsyringe";

import { Address } from "../../entities/Address";
import {
    IAddressRepository,
    ICreateAddressDTO,
} from "../../repositories/IAddressRepository";

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
