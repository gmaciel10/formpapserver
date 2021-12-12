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
            fkIdCity,
        } = request.body;

        const createAddressUseCase = container.resolve(CreateAddressUseCase);

        const address = await createAddressUseCase.execute({
            postalCode,
            district,
            street,
            number,
            complement,
            condominium,
            fkIdCity,
        });
        return response.status(201).send();
    }
}

export { CreateAddressController };
