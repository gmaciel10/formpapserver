import { inject, injectable } from "tsyringe";

import { Client } from "../../entities/Client";
import { ClientRepository } from "../../repositories/implementations/ClientRepository";

@injectable()
class ListClientUseCase {
    constructor(
        @inject("ClientRepository")
        private clientRepository: ClientRepository
    ) {}
    async execute(): Promise<Client[]> {
        const clients = await this.clientRepository.list();
        return clients;
    }
}

export { ListClientUseCase };
