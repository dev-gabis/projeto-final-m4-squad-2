import { Pet } from "../models/pet.model.js";
// SELECT * FROM Pets;

export const getAllPets = async (request, response) => {
	try {
		const pets = await Pet.findAll(); // find all: pegar todos, encontrar todos
		response.status(200).send(pets);
	} catch {
		response.status(500).send({
			error: "Não foi possível encontrar os pets",
		});
	}
};

export const createPet = async (request, response) => {
	try {
		const newPet = request.body;
		const petCriado = await Pet.create(newPet);
		response.status(201).send({
			message: "Pet criado com suceso",
			novoPet: petCriado,
		});
	} catch {
		response.status(500).send({ error: "Não foi possível criar um pet" });
	}
};

export const getById = async (request, response) => {
	try {
		const idParametro = request.params.id
		const petEncontrado = await Pet.findByPk(idParametro)
		response.status(200).send(petEncontrado)
	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};


export const deleteById = async (request, response) => {
	let idParametro = request.params.id;

	try {
		let petParaDeletar = await Pet.findByPk(idParametro)

		if (!petParaDeletar) {
      throw new Error("Not found");
    }

		await petParaDeletar.destroy()

		response.status(204).send();
	} catch (e) {
		response.status(404).send(e.message);
	}
}

export const updatePetById = async (request, response) => {
	const idParametro = request.params.id;

	try {
		//pego do body
		const petDaRequest = request.body
		//encontro o pet na tabela
		const petParaAtualizar = await Pet.findByPk(idParametro)

		if (!petParaAtualizar) {
      throw new Error("Not found");
    }
		//atualizo ele com o método update
		const petAtualizado = await petParaAtualizar.update(petDaRequest)

		response.status(201).send({
			message: "Pet criado com suceso",
			petAtualizado,
		});

	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};
