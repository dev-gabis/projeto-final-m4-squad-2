import User from "../models/user.model.js";

class UserController {
  async index(_, reply) {
    const users = await User.find({});
    reply.json(users);
  }

  async show({ user }, reply) {
    reply.json(user);
  }

  async store({ newUser }, reply) {
    const { email } = newUser;
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return reply.status(409).json({ error: "Email is already being used" });
    }

    await newUser.save();

    reply.status(201).json(newUser);
  }

  async update({ user, body }, reply) {
    const { name, email, role, bio, experiences, skills, applications } = body;

    const userData = {
      name,
      email,
      role,
      bio,
      experiences,
      skills,
      applications
    };

    const updatedUser = await user.overwrite(userData);

    reply.status(200).json(updatedUser);
  }

  async delete({ user }, reply) {
    await User.findByIdAndDelete(user.id);
    reply.sendStatus(202);
  }
}

export default new UserController;