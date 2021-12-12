import { ICreateCityDTO } from "../dtos/ICreateCityDTO";

interface ICityRepository {
    create({ nameCity }: ICreateCityDTO): Promise<void>;
}

export { ICreateCityDTO, ICityRepository };
