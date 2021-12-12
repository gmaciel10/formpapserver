import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAddressUseCase } from "./ListAddressUseCase";

class ListAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAddressUseCase = container.resolve(ListAddressUseCase);
        const all = await listAddressUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListAddressController };
