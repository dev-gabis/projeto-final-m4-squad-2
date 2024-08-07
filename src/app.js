import express from "express";
import userRoutes from "./routes/UserRoutes.js";
import * as dotenv from 'dotenv'
import mongoose from "mongoose";
// import sequelize from "./database/config.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  dbName: "projeto-final-m4"
});

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

