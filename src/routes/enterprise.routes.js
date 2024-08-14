import { Router } from "express"
import EnterpriseControllers from "../controllers/enterprise.controllers.js"

const enterpriseRoutes = new Router()

enterpriseRoutes.post("/enterprise", EnterpriseControllers.store)

export default enterpriseRoutes