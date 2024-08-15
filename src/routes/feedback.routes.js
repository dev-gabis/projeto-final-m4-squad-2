import { Router } from "express"
import {
    getAllFeedbacks,
    getFeedbackById,
    createFeedback,
    updateFeedback,
    deleteFeedback
} from '../controllers/feedbackController.js';

const feedbackRoutes = new Router();

feedbackRoutes.get('/', getAllFeedbacks);
feedbackRoutes.get('/new', (req, res) => res.render('feedbackForm'));
feedbackRoutes.post('/', createFeedback);
feedbackRoutes.get('/:id', getFeedbackById);
feedbackRoutes.get('/:id/edit', (req, res) => res.render('feedbackEdit', { id: req.params.id }));
feedbackRoutes.post('/:id', updateFeedback);
feedbackRoutes.post('/:id/delete', deleteFeedback);

export default feedbackRoutes;
