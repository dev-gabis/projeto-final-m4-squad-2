import { Router } from "express"
import EnterpriseController from "../controllers/enterprise.controller.js";

const enterpriseRoutes = new Router();

enterpriseRoutes.get("/enterprise/", EnterpriseController.index);
enterpriseRoutes.get("/enterprise/:id", EnterpriseController.show);
enterpriseRoutes.post("/enterprise/", EnterpriseController.store);
enterpriseRoutes.put("/enterprise/:id", EnterpriseController.update);
enterpriseRoutes.delete("/enterprise/:id", EnterpriseController.delete);

export default enterpriseRoutes;