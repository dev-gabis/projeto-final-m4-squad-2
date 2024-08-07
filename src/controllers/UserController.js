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

  async update(request, reply) {
    const { id } = request.params;
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

    const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });

    reply.status(200).json(updatedUser);
  }

  async delete(request, reply) {
    const { id } = request.params;

    await User.findByIdAndDelete(id);

    reply.sendStatus(202);
  }
}

export default new UserController;