import { inject, injectable } from "tsyringe";

import { Address } from "../../entities/Address";
import { AddressRepository } from "../../repositories/implementations/AddressRepository";

@injectable()
class ListAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: AddressRepository
    ) {}
    async execute(): Promise<Address[]> {
        const address = await this.addressRepository.list();
        return address;
    }
}

export { ListAddressUseCase };
