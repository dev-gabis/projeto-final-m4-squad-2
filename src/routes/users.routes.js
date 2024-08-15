import { Router } from "express"
import 'express-async-errors'
import UserController from "../controllers/users.controller.js";
import UsersPrehandlers from "../prehandlers/users.prehandlers.js";

const userRoutes = new Router();

//REST pattern
userRoutes.get("/user/", UserController.index);
userRoutes.get("/user/:id",
  UsersPrehandlers.userNotExists,
  UserController.show
);
userRoutes.post("/user/",
  UsersPrehandlers.bodyIsValid,
  UserController.store
);
userRoutes.put("/user/:id",
  UsersPrehandlers.userNotExists,
  UsersPrehandlers.bodyIsValid,
  UserController.update
);
userRoutes.delete("/user/:id",
  UsersPrehandlers.userNotExists,
  UserController.delete
);

//Express error handler
userRoutes.use(function (err, req, res, _) {
  console.log(err);
  res.status(500).send('Erro interno do servidor');
});
export default userRoutes;