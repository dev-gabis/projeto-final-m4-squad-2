import { Router } from "express"
import EnterpriseController from "../controllers/enterprise.controller.js";

const enterpriseRoutes = new Router();

enterpriseRoutes.get("/oppotunity/", EnterpriseController.index);
enterpriseRoutes.get("/oppotunity/:id", EnterpriseController.show);
enterpriseRoutes.post("/oppotunity/", EnterpriseController.store);
enterpriseRoutes.put("/oppotunity/:id", EnterpriseController.update);
enterpriseRoutes.delete("/oppotunity/:id", EnterpriseController.delete);

export default enterpriseRoutes;