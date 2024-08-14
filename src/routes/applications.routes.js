import { Router } from 'express';
import ApplicationController from '../controllers/aplications.controller.js';
import ApplicationsPrehandlers from '../prehandlers/aplications.prehandles.js';

const applicationRoutes = new Router();

// REST pattern
applicationRoutes.get('/aplicacoes/', ApplicationController.index);
applicationRoutes.get('/aplicacoes/:id',
  ApplicationsPrehandlers.applicationNotExists,
  ApplicationController.show
);
applicationRoutes.post('/aplicacoes/',
  ApplicationsPrehandlers.bodyIsValid,
  ApplicationsPrehandlers.userExists, // Substituir jovemExists por userExists
  ApplicationController.store
);
applicationRoutes.put('/aplicacoes/:id',
  ApplicationsPrehandlers.applicationNotExists,
  ApplicationsPrehandlers.bodyIsValid,
  ApplicationsPrehandlers.userExists, // Substituir jovemExists por userExists
  ApplicationController.update
);
applicationRoutes.delete('/aplicacoes/:id',
  ApplicationsPrehandlers.applicationNotExists,
  ApplicationController.delete
);

export default applicationRoutes;