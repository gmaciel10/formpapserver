import { Router } from "express";

import { CreateAddressController } from "../modules/formPAP/useCase/createAddress/CreateAddressController";
import { CreateCityController } from "../modules/formPAP/useCase/createCity/CreateCityController";
import { CreateClientController } from "../modules/formPAP/useCase/createClient/CreateClientController";
import { ListClientController } from "../modules/formPAP/useCase/listClient/ListClientController";

const formPAPRouter = Router();

const createClientController = new CreateClientController();
const listClientController = new ListClientController();

const createAddressController = new CreateAddressController();

const createCityController = new CreateCityController();

formPAPRouter.post("/", async (request, response) => {
    await createCityController.handle(request, response);
    await createAddressController.handle(request, response);
    await createClientController.handle(request, response);
});

formPAPRouter.get("/", listClientController.handle);

export { formPAPRouter };
