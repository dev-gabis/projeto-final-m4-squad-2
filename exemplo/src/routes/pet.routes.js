import {
	deleteById,
	getAllPets,
	getById,
	updatePetById,
} from "../controllers/pet.controller.js";
import { createPet } from "../controllers/pet.controller.js";
import { Router } from "express";

const petRouter = Router();

petRouter.get("/pets/all", getAllPets);
petRouter.post("/pets", createPet);
petRouter.get("/pets/:id", getById);
petRouter.delete("/pets/:id", deleteById);
petRouter.put("/pets/:id", updatePetById);


export { petRouter };
