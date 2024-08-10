import {model, Schema} from "mongoose"

const enterpriseSchema = new Schema({
 
    name: {
      type: String,
      required: true
    
    },
    cnpj : {
        type: String,
        required: true
      },
      address: {
      type: String,
      required: true
    },
   email: {
      type: String,
     required: true
    },
 
  
  });
  
  const Enterprise = model("enterprise", enterpriseSchema);
  export default Enterprise;