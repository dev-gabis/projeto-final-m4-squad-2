import OpportunityModel from "../models/opportunity.model.js";

class OpportunityController {
  async index(response) {
    const opportunities = await OpportunityModel.find();
    response.json(opportunities);
  }

  async show(request, response) {
    const { id } = request.params;
    const opportunity = await OpportunityModel.findById(id);
    response.json(opportunity);
  }

  async store(request, response) {
    const newOpportunity = new OpportunityModel(request.body);
    await newOpportunity.save();
    response.json(newOpportunity);
  }

  async update(request, response) {
    const { id } = request.params;
    const updatedOpportunity = request.body;

    try {
      const opportunity = await OpportunityModel.findByIdAndUpdate(id, updatedOpportunity, { new: true });
      response.json(opportunity);
    } catch (error) {
      response.status(500).json({ error: "Erro ao atualizar a oportunidade" });
    }
  }


  async delete(request, response) {
    const { id } = request.params;
    const opportunity = await OpportunityModel.findByIdAndDelete(id);
    response.json(opportunity);
  }
}

export default new OpportunityController;