import Feedback from '../models/feedbackModel.js';


export const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar feedbacks" });
    }
};

export const getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (feedback) {
            res.json(feedback);
        } else {
            res.status(404).json({ error: "Feedback não encontrado" });
        }
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar feedback" });
    }
};

export const createFeedback = async (req, res) => {
    try {
        const { name, email, feedback, rating } = req.body;
        const newFeedback = new Feedback({ name, email, feedback, rating });
        await newFeedback.save();
        res.json(newFeedback);
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar feedback" });
    };
}

export const updateFeedback = async (req, res) => {
    try {
        const { name, email, feedback, rating } = req.body;
        const updatedFeedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            { name, email, feedback, rating },
            { new: true }
        );
        if (updatedFeedback) {
            res.json(updateFeedback);
        } else {
            res.status(404).json({ error: "Feedback não encontrado" });
        }
    } catch (err) {
        res.status(500).json({ error: "Erro ao atualizar feedback" });
    }
};

export const deleteFeedback = async (req, res) => {
    try {
        const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
        if (deletedFeedback) {
            res.sendStatus(202);
        } else {
            res.status(404).json({ error: "Feedback não encontrado" });
        }
    } catch (err) {
        res.status(500).json({ error: "Erro ao deletar feedback" });
    }
};
