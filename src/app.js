import express from "express";
import userRoutes from "./routes/users.routes.js";
import * as dotenv from 'dotenv'
import mongoose from "mongoose";
import opportunityRoutes from "./routes/opportunity.routes.js";
import enterpriseRoutes from "./routes/enterprise.routes.js";
import mentoringRoutes from "./routes/monitoring.routes.js";
// import sequelize from "./database/config.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(userRoutes);

app.use(opportunityRoutes);

app.use(enterpriseRoutes);

app.use(mentoringRoutes);

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

