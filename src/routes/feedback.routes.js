const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.get('/', feedbackController.getAllFeedbacks);
router.get('/new', (req, res) => res.render('feedbackForm'));
router.post('/', feedbackController.createFeedback);
router.get('/:id', feedbackController.getAllFeedbackById);
router.get('/:id/edit', (req, res) => res. render('feedbackEdit', { id: req.params.id}));
router.post('/:id', feedbackController.updateFeedback);
router.post('/:id/delete', feedbackController.deleteFeedback);

module.exports = router;