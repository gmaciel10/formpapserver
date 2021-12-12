import { inject, injectable } from "tsyringe";

import {
    ICityRepository,
    ICreateCityDTO,
} from "../../repositories/ICityRepository";

@injectable()
class CreateCityUseCase {
    constructor(
        @inject("CityRepository")
        private cityRepository: ICityRepository
    ) {}
    async execute({ nameCity }: ICreateCityDTO): Promise<void> {
        this.cityRepository.create({ nameCity });
    }
}

export { CreateCityUseCase };
