import { inject, injectable } from "tsyringe";

import {
    ICityRepository,
    ICreateCityDTO,
} from "../../repositories/ICityRepository";

interface IRequest {
    nameCity: string;
}

@injectable()
class CreateCityUseCase {
    constructor(
        @inject("CityRepository")
        private cityRepository: ICityRepository
    ) {}
    async execute(nameCity: ICreateCityDTO): Promise<IRequest> {
        const city = await this.cityRepository.create(nameCity);
        return city;
    }
}

export { CreateCityUseCase };
