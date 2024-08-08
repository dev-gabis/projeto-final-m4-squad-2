import { Router } from "express"
import OpportunityController from "../controllers/OpportunityController";

const opportunityRoutes = new Router();

// userRoutes.get("/", UserController.index);
opportunityRoutes.get("/:id", OpportunityController.show);
opportunityRoutes.post("/", OpportunityController.store);
opportunityRoutes.put("/:id", OpportunityController.update);
opportunityRoutes.delete("/:id", OpportunityController.delete);

export default opportunityRoutes;