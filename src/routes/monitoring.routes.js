import { Router } from "express"
import MentoringController from "../controllers/mentoring.controller.js";

const mentoringRoutes = new Router();

mentoringRoutes.get("/mentoring/", MentoringController.index);
mentoringRoutes.get("/mentoring/:id", MentoringController.show);
mentoringRoutes.post("/mentoring/", MentoringController.store);
mentoringRoutes.put("/mentoring/:id", MentoringController.update);
mentoringRoutes.delete("/mentoring/:id", MentoringController.delete);

export default mentoringRoutes;