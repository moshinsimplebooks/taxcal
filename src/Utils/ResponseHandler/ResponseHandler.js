import Toaster from '../Toaster/Toaster'

class ResponseHandler {
    handleCommonError(message) {
        Toaster.justToast('error', message, () => {
            
        })
    }
}

export default ResponseHandler = new ResponseHandler()