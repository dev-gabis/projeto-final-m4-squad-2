import { Router } from "express"
import * as FeedbackController from '../controllers/feedback.controller.js';

const feedbackRoutes = new Router();

feedbackRoutes.get('/feedback/', FeedbackController.getAllFeedbacks);
feedbackRoutes.get('/feedback/:id', FeedbackController.getFeedbackById);
feedbackRoutes.post('/feedback/', FeedbackController.createFeedback);
feedbackRoutes.put('/feedback/:id', FeedbackController.updateFeedback);
feedbackRoutes.delete('/feedback/:id', FeedbackController.deleteFeedback);

export default feedbackRoutes;
