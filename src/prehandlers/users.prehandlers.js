import { request } from "express";
import User from "../models/user.model.js";

class UsersPrehandlers {
  async userNotExists(request, reply, next) {
    const { id } = request.params;
    const user = await User.findById(id);

    if (!user) {
      return reply.status(404).json({ error: "User not found" });
    }

    request.user = user;
    next();
  }

  async bodyIsValid({ body }, reply, next) {
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

    const newUser = new User(userData);

    try {
      await newUser.validate();
    } catch (err) {
      return reply.status(400).json({ error: err.message });
    }

    request.newUser = newUser;
    next();
  }
}

export default new UsersPrehandlers;