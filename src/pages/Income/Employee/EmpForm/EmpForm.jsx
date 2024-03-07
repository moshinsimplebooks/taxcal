import { useFormik } from 'formik'
import React, { useState } from 'react'
import BuisnessYup from '../../../../Utils/validation/BuisnessYup/BuisnessYup'
import Toaster from '../../../../Utils/Toaster/Toaster'
import ResponseHandler from '../../../../Utils/ResponseHandler/ResponseHandler'
import LocalStore from '../../../../Utils/LocalStore/LocalStore'
import { v4 as uuidv4, v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { addTax } from '../../../../Features/Taxer/taxSlice'
import calculateTax from '../../../../Utils/EmployeeTaxer/EmpTaxer'

export default function EmpForm() {
    const dispatch = useDispatch()
    const taxess = useSelector((state) => state.taxes)
    const [tax, setTax] = useState('')

    const addTaxess = (taxItem) => {
        dispatch(addTax(taxItem));
        const updatedTaxes = [...taxess, taxItem];
        Toaster.justToast('success', 'Added', () => { });
        LocalStore.storeTax(JSON.stringify(updatedTaxes));
    };

    const initValues = {
        type: '',
        amount: '',
        description: '',
        anum: '',
    }
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initValues,
        validationSchema: BuisnessYup.createBuisnessIncome,
        onSubmit: (values) => {

            try {
                let amt = 0
                let amtYear = 0
                let amtMonth = 0
                let taxToPayMon=0
                let taxToPayYear=0
                if (values.anum ==='monthly') {
                    // amt = parseFloat(values.amount * 12).toFixed(2)
                    amt = parseFloat(values.amount).toFixed(2)
                    if(amt>10000){
                        //add to tax
                        taxToPayYear = parseFloat(calculateTax(amt)).toFixed(2)
                    }else if(amt<10000){
                        //no tax
                        taxToPayMon=0
                    }
                    amt = amt*12
                } else if (values.anum === 'anually') {
                    amt = parseFloat(values.amount).toFixed(2)
                    if(amt>1200000){
                        //add to tax
                        amt = amt-1200000
                        taxToPayYear = parseFloat(calculateTax(amt)).toFixed(2)
                    }else if(amt<=1200000){
                        //no tax
                        taxToPayMon=0
                    }
                }

                amtYear =  parseFloat(amt).toFixed(2)
                amtMonth =  parseFloat(amt/12).toFixed(2)
                taxToPayMon = parseFloat(taxToPayYear/12).toFixed(2)
                const taxWithId = {
                    ...values,
                    amtYear,
                    amtMonth,
                    taxToPayMon,
                    taxToPayYear,
                    id: uuidv4(), // Add a unique ID to the tax entry
                };
                setTax(values)
                addTaxess(taxWithId)
            } catch (error) {
                ResponseHandler.handleCommonError(error)
            }
        }
    })
    return (
        <div className="col-sm-5">
            <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                <div className="row mb-2">
                    <div className="col-6">
                        <label htmlFor="validationType" className="form-label">Enter Type</label>
                        <input
                            value={values.type}
                            onChange={handleChange}
                            type="text"
                            id="validationType"
                            className={`form-control ${(errors.type && touched.type) ? 'is-invalid' : ''}`}
                            name='type'
                            placeholder="saman siri" />
                        <div className="invalid-feedback">
                            {errors.type}
                        </div>
                    </div>
                    <div className=" col-6">
                        <label htmlFor="validationAmount" className="form-label">Enter Amount</label>
                        <div className='input-group'>
                            <span className="input-group-text" id="basic-addon1">Rs</span>
                            <input
                                value={values.amount}
                                onChange={handleChange}
                                type="text"
                                id='validationAmount'
                                name='amount'
                                className={`form-control ${(errors.amount && touched.amount) ? 'is-invalid' : ''}`}
                                placeholder="15000000" />
                            <div className="invalid-feedback">
                                {errors.amount}
                            </div>
                        </div>
                    </div>
                    <div className="col-8 mt-3">
                        <label htmlFor="validationTextarea" className="form-label">Add Description</label>
                        <textarea
                            value={values.description}
                            onChange={handleChange}
                            name='description'
                            className={`form-control ${(errors.description && touched.description) ? 'is-invalid' : ''}`}
                            id="validationTextarea"
                            placeholder="Required example textarea"
                        />
                        <div className="invalid-feedback">
                            {errors.description}
                        </div>
                    </div>
                    <div className="col-4 mt-3">
                        <label htmlFor="validationAnum" className="form-label">Anum?</label>
                        <select
                            id='validationAnum'
                            name='anum'
                            value={values.anum}
                            onChange={handleChange}
                            class="form-select"
                        >
                            <option selected value="anually">annually</option>
                            <option value="monthly">monthly</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-1">
                    <div className="col-12">
                        <button type='submit' className='btn btn-success w-100'>Add Income</button>
                    </div>
                </div>
            </form>

            {/* upload file */}
            <form className='mt-3'>
                <h6>Or Upload Papers</h6>
                <div className="row mb-3">
                    <div className="col-8">
                        <input type="file" className="form-control" aria-label="file example" required />
                        <div className="invalid-feedback">Example invalid form file feedback</div>
                    </div>
                    <div className="col-4">
                        <button className="w-100 btn btn-success" type="submit">Upload Papers</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
