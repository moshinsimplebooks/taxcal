import * as yup from 'yup'

class BuisnessYup{
    createBuisnessIncome = yup.object({
        type: yup.string().required(),
        description: yup.string().required(),
        amount:yup.number().typeError('Must be a number').min(0,'amount is positive').required(),
        anum: yup.string().oneOf(['annually', 'monthly'], 'Frequency must be one of the following values: annually, monthly').required()
    })
}

export default BuisnessYup = new BuisnessYup()