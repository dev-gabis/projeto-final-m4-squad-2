import express from "express";
import userRoutes from "./routes/users.routes.js";
import * as dotenv from 'dotenv'
import mongoose from "mongoose";
import * as swaggerUi from 'swagger-ui-express'

import opportunityRoutes from "./routes/opportunity.routes.js";
import enterpriseRoutes from "./routes/enterprise.routes.js";
import mentoringRoutes from "./routes/monitoring.routes.js";
import applicationRoutes from "./routes/applications.routes.js"
import feedbackRoutes from "./routes/feedback.routes.js";

import corsConfig from "./config/cors.config.js";


import { createRequire } from "module";
const require = createRequire(import.meta.url);

dotenv.config();

const swaggerDocument = require("./swagger.json");

const app = express();

app.use(corsConfig);
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(userRoutes);
app.use(opportunityRoutes);
app.use(enterpriseRoutes);
app.use(mentoringRoutes);
app.use(applicationRoutes);
app.use(feedbackRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  dbName: "projeto-final-m4"
});

app.listen(process.env.PORT || 3000, () => console.log("SERVER is running"));
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

