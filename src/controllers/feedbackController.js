import Feedback from '../models/feedbackModel.js';


export const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.render('feedbackList', { feedbacks });
    } catch (err) {
        res.status(500).send("Erro ao buscar feedbacks");
    }
};

export const getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (feedback) {
            res.render('feedbackDetail', { feedback });
        } else {
            res.status(404).send("Feedback não encontrado");
        }
    } catch (err) {
        res.status(500).send("Erro ao buscar feedback");
    }
};

export const createFeedback = async (req, res) => {
    try {
        const { name, email, feedback, rating } = req.body;
        const newFeedback = new Feedback({ name, email, feedback, rating });
        await newFeedback.save();
        res.redirect('/feedbacks');
    } catch (err) {
        res.status(500).send("Erro ao criar feedback");
    }
};

export const updateFeedback = async (req, res) => {
    try {
        const { name, email, feedback, rating } = req.body;
        const updatedFeedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            { name, email, feedback, rating },
            { new: true }
        );
        if (updatedFeedback) {
            res.redirect('/feedbacks/' + req.params.id);
        } else {
            res.status(404).send("Feedback não encontrado");
        }
    } catch (err) {
        res.status(500).send("Erro ao atualizar feedback");
    }
};

export const deleteFeedback = async (req, res) => {
    try {
        const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
        if (deletedFeedback) {
            res.redirect('/feedbacks');
        } else {
            res.status(404).send("Feedback não encontrado");
        }
    } catch (err) {
        res.status(500).send("Erro ao deletar feedback");
    }
};
