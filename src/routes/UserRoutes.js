import { Router } from "express"
import UserController from "../controllers/UserController.js";

const userRoutes = new Router();

userRoutes.get("/", UserController.index);
userRoutes.get("/:id", UserController.show);
userRoutes.post("/", UserController.store);
userRoutes.put("/:id", UserController.update);
userRoutes.delete("/:id", UserController.delete);

export default userRoutes;