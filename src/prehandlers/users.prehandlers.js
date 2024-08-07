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
}

export default new UsersPrehandlers;