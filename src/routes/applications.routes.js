import { Router } from 'express';
import ApplicationController from '../controllers/aplications.controller.js';
import ApplicationsPrehandlers from '../prehandlers/aplications.prehandles.js';

const applicationRoutes = new Router();

// REST pattern
applicationRoutes.get('/application/', ApplicationController.index);
applicationRoutes.get('/application/:id',
  ApplicationsPrehandlers.applicationNotExists,
  ApplicationController.show
);
applicationRoutes.post('/application/',
  ApplicationsPrehandlers.bodyIsValid,
  ApplicationsPrehandlers.userExists, // Substituir jovemExists por userExists
  ApplicationController.store
);
applicationRoutes.put('/application/:id',
  ApplicationsPrehandlers.applicationNotExists,
  ApplicationsPrehandlers.bodyIsValid,
  ApplicationsPrehandlers.userExists, // Substituir jovemExists por userExists
  ApplicationController.update
);
applicationRoutes.delete('/application/:id',
  ApplicationsPrehandlers.applicationNotExists,
  ApplicationController.delete
);

export default applicationRoutes;