import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            postalCode,
            district,
            street,
            number,
            complement,
            condominium,
            idCity,
        } = request.body;

        const createAddressUseCase = container.resolve(CreateAddressUseCase);
        const address = await createAddressUseCase.execute({
            postalCode,
            district,
            street,
            number,
            complement,
            condominium,
            fkIdCity: idCity,
        });
        return response.status(201).json(address);
    }
}

export { CreateAddressController };
