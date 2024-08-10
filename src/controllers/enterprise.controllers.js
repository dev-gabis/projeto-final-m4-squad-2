import Enterprise from "../models/enterprise.models";

class EnterpriseController {
    async store(request, response){ 
        const enterpriseData= request.body
        const newEnterprise= new Enterprise(enterpriseData)
        await newEnterprise.save()
        response.json(newEnterprise)
    }

}
export default new EnterpriseController()