import Enterprise from "../models/enterprise.model.js";

class EnterpriseController {
    async index(_, response) {
        const enterprise = await Enterprise.find()
        response.json(enterprise)
    }

    async show(request, response) {
        const { id } = request.params
        const enterprise = await Enterprise.findById(id)
        response.json(enterprise)
    }

    async store(request, response) {
        const enterpriseData = request.body
        const newEnterprise = new Enterprise(enterpriseData)
        await newEnterprise.save()
        response.json(newEnterprise)
    }

    async update({ body, params }, response) {
        const { id } = params;
        const { name, cnpj, adress, email } = body;
        const data = { name, cnpj, adress, email }
        const updateEnterprise = await Enterprise.findByIdAndUpdate(id, data, { new: true })
        response.json(updateEnterprise)
    }

    async delete(request, response) {
        const { id } = request.params
        const deleteEnterprise = await Enterprise.findByIdAndDelete(id)
        response.json(deleteEnterprise)
    }

}
export default new EnterpriseController();