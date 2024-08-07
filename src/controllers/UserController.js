import UserModel from "../models/UserModel.js";

class UserController {
  async index(request, reply) {
  }

  async show(request, reply) {
    const { id } = request.params;
    const user = await UserModel.findById(id);
    reply.json(user);
  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

export default new UserController;