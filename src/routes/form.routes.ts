import { request, response, Router } from "express";

import { CreateAddressController } from "../modules/formPAP/useCase/createAddress/CreateAddressController";
import { CreateCityController } from "../modules/formPAP/useCase/createCity/CreateCityController";
import { CreateClientController } from "../modules/formPAP/useCase/createClient/CreateClientController";

const formPAPRouter = Router();

const createCityController = new CreateCityController();

const createAddressController = new CreateAddressController();

const createClientController = new CreateClientController();

formPAPRouter.post("/city", createCityController.handle);

formPAPRouter.post("/address", createAddressController.handle);

formPAPRouter.post("/client", (request, response) => {
    createClientController.handle(request, response);
});

export { formPAPRouter };
