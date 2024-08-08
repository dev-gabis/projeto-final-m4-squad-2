import OpportunityModel from "../models/";

class OpportunityController {
  async index(request, reply) {
    const opportunities = await OpportunityModel.find();
    reply.json(opportunities);
  }

  async show(request, reply) {
    const { id } = request.params;
    const opportunity = await OpportunityModel.findById(id);
    reply.json(opportunity);
  }

  async store(request, reply) {
    const newOpportunity = new OpportunityModel(request.body);
    await newOpportunity.save();
    reply.json(newOpportunity);
  }

  async update(request, reply) {
    const { id } = request.params;
    const updatedOpportunity = request.body; 
  
    try {
      const opportunity = await OpportunityModel.findByIdAndUpdate(id, updatedOpportunity, { new: true });
      reply.json(opportunity);
    } catch (error) {
      reply.status(500).json({ error: "Erro ao atualizar a oportunidade" });
    }
  }
  

  async delete(request, reply) {
    const { id } = request.params;
    const opportunity = await OpportunityModel.findByIdAndDelete(id);
    reply.json(opportunity);
  }
}

export default new OpportunityController;