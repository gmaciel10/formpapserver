import express from "express";

import "./database";

import "./shared/container/index";

import { router } from "./routes/index";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
    console.log("aplicação rodando");
});
