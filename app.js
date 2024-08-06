import express from "express";
import sequelize from "./src/database/config.js";

const app = express();

app.use(express.json());


const PORT = 3000;

// Sincronizar o banco de dados
sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`A aplicação está rodando na porta http://localhost:${PORT}`);
		});
	})
	.catch((erro) => {
		console.error("Não foi possível conectar no banco de dados", erro);
	});
