const db = require('../models/feedbackModel');

exports.getAllFeedbacks = (req, res) => {
    db.all('SELECT * FROM Feedbacks', (err, rows) => {
        if (err){
            res.status(500).send("Erro ao buscar feedbacks");
        } else {
            res.render('feedbackList', {feedbacks: rows});
        }
    });
};

exports.getAllFeedbackById = (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM Feedbacks WHERE id = ?', [id], (err, rows) => {
        if (err) {
            res.status(500).send("Erro ao buscar feedback");
        } else {
            res.render('feedbackDetaill', { feedback: rows});
        }
    });
};

exports.createFeedback = (req, res) => {
    const { name, email, feedback, rating } = req.body;
    db.run('INSERT INTO Feedbacks (name, email, feedback, rating)VALUES (?, ?, ?, ?)', [name, email, feedback, rating], (err) => {
        if (err) {
            res.status(500).send("Erro ao criar feedback");
        } else {
            res.redirect('/feedbacks');
        }
    });
};

exports.updateFeedback = (req, res) => {
    const { id } = req.params;
    const { name, email, feedback, rating } = req.body;
    db.run('UPDATE Feedbacks SET name = ?, feedback = ?, rating = ? WERE id = ?', [name, email, feedback, rating, id], (err) => {
        if (err) {
            res.status(500).send("Erro ao atualizar feedback");
        } else {
            res.redirect('/feedbacks/' + id);

        }
    });
};

exports.deleteFeedback = (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM Feedbacks WHERE id = ?', [id], (err) => {
        if (err) {
            res.status(500).send("Erro ao deletar feedback");
        } else {
            res.redirect('/feedbacks');
        }
    });
};