import * as yup from 'yup'

class BuisnessYup{
    createBuisnessIncome = yup.object({
        type: yup.string().required(),
        description: yup.string().required(),
        amount:yup.number().typeError('Must be a number').min(0,'amount is positive').required(),
        anum: yup.string().oneOf(['anually', 'monthly'], 'Frequency must be one of the following values: anually, monthly').required()
    })
}

export default BuisnessYup = new BuisnessYup()