import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createClientUseCase = container.resolve(CreateClientUseCase);
        const {
            name,
            document,
            phoneA,
            phoneB,
            email,
            schooling,
            frontDocument,
            backDocument,
            selfieDocument,
            idAddress,
        } = request.body;
        console.log(idAddress);
        createClientUseCase.execute({
            name,
            document,
            phoneA,
            phoneB,
            email,
            schooling,
            frontDocument,
            backDocument,
            selfieDocument,
            fkIdAddress: idAddress,
        });

        return response.status(201).send();
    }
}

export { CreateClientController };
