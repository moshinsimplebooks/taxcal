import axios from "axios";

class BaseService{
    constructor() {
        axios.defaults.baseURL = "https://documenter.cognitiveservices.azure.com/formrecognizer/documentModels/"
    }
    getHeader() {
        return { headers: { "Ocp-Apim-Subscription-Key": "92180874a2764e2fa85236dd40255453" } }
    }
    getBaseURL() {
        return this.baseURL;
    }
}
export default BaseService = new BaseService()