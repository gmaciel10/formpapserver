import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCityUseCase } from "./CreateCityUseCase";

class CreateCityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nameCity } = request.body;
        const createCityUseCase = container.resolve(CreateCityUseCase);
        const city = await createCityUseCase.execute({ nameCity });
        return response.status(201).json(city);
    }
}

export { CreateCityController };
