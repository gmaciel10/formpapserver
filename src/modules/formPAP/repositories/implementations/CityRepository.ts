import { getRepository, Repository } from "typeorm";

import { City } from "../../entities/City";
import { ICityRepository, ICreateCityDTO } from "../ICityRepository";

interface IRequest {
    nameCity: string;
}
class CityRepository implements ICityRepository {
    private repository: Repository<City>;
    constructor() {
        this.repository = getRepository(City);
    }
    async create(nameCity: ICreateCityDTO): Promise<IRequest> {
        const city = this.repository.create(nameCity);
        await this.repository.save(city);
        return city;
    }
}

export { CityRepository };
