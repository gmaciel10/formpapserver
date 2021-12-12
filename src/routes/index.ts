import { Router } from "express";

import { formPAPRouter } from "./form.routes";

const router = Router();

router.use("/formPAP", formPAPRouter);

export { router };
