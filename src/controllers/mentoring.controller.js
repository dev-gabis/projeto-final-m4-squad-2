import Mentoring from "../models/mentoring.model.js";

class MentoringController {
  async index(_, response) {
    const mentorings = await Mentoring.find();
    response.json(mentorings);
  }

  async show(request, response) {
    const { id } = request.params;
    const mentoring = await Mentoring.findById(id);
    response.json(mentoring);
  }

  async store(request, response) {
    const newMentoring = new Mentoring(request.body);
    await newMentoring.save();
    response.json(newMentoring);
  }

  async update(request, response) {
    const { id } = request.params;
    const updatedData = request.body;

    try {
      const updatedMentoring = await Mentoring.findByIdAndUpdate(id, updatedData, { new: true });
      response.json(updatedMentoring);
    } catch (error) {
      response.status(500).json({ error: "Erro ao atualizar a oportunidade" });
    }
  }

  async delete(request, response) {
    const { id } = request.params;
    await Mentoring.findByIdAndDelete(id);
    response.sendStatus(202);
  }
}

export default new MentoringController;