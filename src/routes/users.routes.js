import { Router } from "express"
import UserController from "../controllers/users.controller.js";
import 'express-async-errors'
import usersPrehandlers from "../prehandlers/users.prehandlers.js";

const userRoutes = new Router();

//REST pattern
userRoutes.get("/", UserController.index);
userRoutes.get("/:id",
  usersPrehandlers.userNotExists,
  UserController.show
);
userRoutes.post("/", UserController.store);
userRoutes.put("/:id",
  usersPrehandlers.userNotExists,
  UserController.update
);
userRoutes.delete("/:id",
  usersPrehandlers.userNotExists,
  UserController.delete
);

//Express error handler
userRoutes.use(function (err, req, res, _) {
  console.log(err);
  res.status(500).send('Erro interno do servidor');
});
export default userRoutes;