import Application from "../models/aplications.model.js";
import User from "../models/user.model.js";


class ApplicationsPrehandlers {
    async applicationNotExists(request, reply, next) {
        const { id } = request.params;
        const application = await Application.findById(id);

        if (!application) {
            return reply.status(404).json({ error: "Application not found" });
        }

        request.application = application;
        next();
    }

    async bodyIsValid({ body }, reply, next) {
        const { userId, status, dataAplicacao } = body;

        if (!userId || !status || !dataAplicacao) {
            return reply.status(400).json({ error: "Invalid application data" });
        }

        next();
    }

    async userExists({ body }, reply, next) {
        const user = await User.findById(body.userId);

        if (!user) {
            return reply.status(404).json({ error: "User not found" });
        }

        next();
    }
}

export default new ApplicationsPrehandlers();