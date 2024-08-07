import express from "express";
import userRoutes from "./routes/UserRoutes.js";
// import sequelize from "./database/config.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log("SERVER is running"));
// // Sincronizar o banco de dados
// sequelize
// 	.sync()
// 	.then(() => {
// 		app.listen(PORT, () => {
// 			console.log(`A aplicação está rodando na porta http://localhost:${PORT}`);
// 		});
// 	})
// 	.catch((erro) => {
// 		console.error("Não foi possível conectar no banco de dados", erro);
// 	});

