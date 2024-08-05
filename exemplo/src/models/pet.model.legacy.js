let idAuto = 1;

export class Pet {
	constructor(nome, porte, raca, especie, idade) {
		this.id = idAuto++;
		this.nome = nome;
		this.porte = porte;
		this.raca = raca;
		this.especie = especie;
		this.idade = idade;
	}
}
