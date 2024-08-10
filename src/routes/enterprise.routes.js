import { Router } from "express"
import EnterpriseControllers from "../controllers/enterprise.controllers"

const enterpriseRoutes= new Router()

enterpriseRoutes.post("/enterprise", EnterpriseControllers.store)

export default enterpriseRoutes