import Application from "../models/aplications.model.js";

class ApplicationController {
  // Listar todas as aplicações
  async index(_, reply) {
    try {
      const applications = await Application.find({});
      reply.json(applications);
    } catch (error) {
      reply.status(500).json({ error: "Erro ao listar aplicações" });
    }
  }

  // Obter uma aplicação específica
  async show({ params }, reply) {
    try {
      const application = await Application.findById(params.id);
      if (!application) {
        return reply.status(404).json({ error: "Aplicação não encontrada" });
      }
      reply.json(application);
    } catch (error) {
      reply.status(500).json({ error: "Erro ao obter aplicação" });
    }
  }

  // Criar uma nova aplicação
  async store({ body }, reply) {
    try {
      const newApplication = new Application(body);
      await newApplication.save();
      reply.status(201).json(newApplication);
    } catch (error) {
      reply.status(500).json({ error: "Erro ao criar aplicação" });
    }
  }

  // Atualizar uma aplicação existente
  async update({ params, body }, reply) {
    try {
      const updatedApplication = await Application.findByIdAndUpdate(params.id, body, { new: true });
      if (!updatedApplication) {
        return reply.status(404).json({ error: "Aplicação não encontrada" });
      }
      reply.json(updatedApplication);
    } catch (error) {
      reply.status(500).json({ error: "Erro ao atualizar aplicação" });
    }
  }

  // Deletar uma aplicação
  async delete({ params }, reply) {
    try {
      const deletedApplication = await Application.findByIdAndDelete(params.id);
      if (!deletedApplication) {
        return reply.status(404).json({ error: "Aplicação não encontrada" });
      }
      reply.json({ message: "Aplicação deletada com sucesso" });
    } catch (error) {
      reply.status(500).json({ error: "Erro ao deletar aplicação" });
    }
  }

  async index(req, res) {
    // implementação
}

async show(req, res) {
    // implementação
}

async store(req, res) {
    // implementação
}

async update(req, res) {
    // implementação
}

async delete(req, res) {
    // implementação
}
}


export default new ApplicationController();