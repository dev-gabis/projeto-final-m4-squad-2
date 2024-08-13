import { Router } from "express"
import OpportunityController from "../controllers/OpportunityController";

const opportunityRoutes = new Router();

opportunityRoutes.get("oppotunity/", OpportunityController.index);
opportunityRoutes.get("oppotunity/:id", OpportunityController.show);
opportunityRoutes.post("oppotunity/", OpportunityController.store);
opportunityRoutes.put("oppotunity/:id", OpportunityController.update);
opportunityRoutes.delete("oppotunity/:id", OpportunityController.delete);

export default opportunityRoutes;