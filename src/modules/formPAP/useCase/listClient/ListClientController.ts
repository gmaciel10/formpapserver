import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListClientUseCase } from "./ListClientUseCase";

class ListClientController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listClientUseCase = container.resolve(ListClientUseCase);
        const all = await listClientUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListClientController };
