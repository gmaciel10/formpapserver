import { getRepository, Repository } from "typeorm";

import { City } from "../../entities/City";
import { ICityRepository, ICreateCityDTO } from "../ICityRepository";

class CityRepository implements ICityRepository {
    private repository: Repository<City>;
    constructor() {
        this.repository = getRepository(City);
    }
    async create({ nameCity }: ICreateCityDTO): Promise<void> {
        const city = this.repository.create({ nameCity });
        await this.repository.save(city);
    }
}

export { CityRepository };
