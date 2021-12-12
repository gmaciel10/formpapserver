import { container } from "tsyringe";

import { IAddressRepository } from "../../modules/formPAP/repositories/IAddressRepository";
import { ICityRepository } from "../../modules/formPAP/repositories/ICityRepository";
import { IClientRepository } from "../../modules/formPAP/repositories/IClientRepository";
import { AddressRepository } from "../../modules/formPAP/repositories/implementations/AddressRepository";
import { CityRepository } from "../../modules/formPAP/repositories/implementations/CityRepository";
import { ClientRepository } from "../../modules/formPAP/repositories/implementations/ClientRepository";

container.registerSingleton<ICityRepository>("CityRepository", CityRepository);

container.registerSingleton<IClientRepository>(
    "ClientRepository",
    ClientRepository
);

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
);
