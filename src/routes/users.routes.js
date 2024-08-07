import { Router } from "express"
import UserController from "../controllers/users.controller.js";
import 'express-async-errors'

const userRoutes = new Router();

//REST pattern
userRoutes.get("/", UserController.index);
userRoutes.get("/:id", UserController.show);
userRoutes.post("/", UserController.store);
userRoutes.put("/:id", UserController.update);
userRoutes.delete("/:id", UserController.delete);

//Express error handler
userRoutes.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send('Erro interno do servidor');
});
export default userRoutes;