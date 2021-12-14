import { ICreateCityDTO } from "../dtos/ICreateCityDTO";
import { City } from "../entities/City";

interface IRequest {
    nameCity: string;
}
interface ICityRepository {
    create(nameCity: ICreateCityDTO): Promise<IRequest>;
}

export { ICreateCityDTO, ICityRepository };
