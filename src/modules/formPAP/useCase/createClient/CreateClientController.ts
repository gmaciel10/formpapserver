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
        } = request.body;
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
        });

        return response.status(201).send();
    }
}

export { CreateClientController };
