import User from "../models/UserModel.js";

class UserController {
  async index(request, reply) {
  }

  async show(request, reply) {
    const { id } = request.params;
    const user = await User.findById(id);
    reply.json(user);
  }

  async store(request, reply) {
    const { name, email, role, bio, experiences, skills, applications } = request.body;
    const userData = {
      name,
      email,
      role,
      bio,
      experiences,
      skills,
      applications
    };

    const newUser = new User(userData);
    await newUser.save();

    reply.status(201).json(newUser);
  }

  update() {

  }

  delete() {

  }
}

export default new UserController;