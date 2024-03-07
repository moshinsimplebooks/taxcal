import * as yup from 'yup'

class BuisnessYup{
    createBuisnessIncome = yup.object({
        type: yup.string().required(),
        description: yup.string().required(),
        amount:yup.number().typeError('Must be a number').min(0,'amount is positive').required()
    })
}

export default BuisnessYup = new BuisnessYup()