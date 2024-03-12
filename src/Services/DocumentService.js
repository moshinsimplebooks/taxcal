import axios from "axios"
import BaseService from "./Base/BaseService";

class DocumentService{
    constructor(){
        BaseService.getBaseURL()
        this.POSTPDF = "temp_model:analyze?api-version=2023-07-31";
    }
    postPdf(input) {
        let data = {
            base64Source: input,
        }
        return axios.post(this.POSTPDF, data, BaseService.getHeader())
    }
    getAnalyzed(resultId) {
        return axios.get(`temp_model/analyzeResults/${resultId}?api-version=2023-07-31`,BaseService.getHeader())
    }
}
export default DocumentService = new DocumentService()