import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toaster from '../../../../Utils/Toaster/Toaster';
import LocalStore from '../../../../Utils/LocalStore/LocalStore';
import { useFormik } from 'formik';
import { NumericFormat } from 'react-number-format';
import ResponseHandler from '../../../../Utils/ResponseHandler/ResponseHandler';
import { v4 as uuidv4 } from 'uuid';
import { addTax } from '../../../../Features/Taxer/taxSlice'
import InvestYup from '../../../../Utils/validation/InvestYup/InvestYup';

export default function InvestForm() {
    const dispatch = useDispatch()
    const taxes = useSelector((state) => state.taxes)

    const filterInvestTaxes = taxes.filter(tax => tax.source === "empInvest")

    const addTaxes = (taxItem) => {
        dispatch(addTax(taxItem));
        const updatedTaxes = [...taxes, taxItem];
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
        validationSchema: InvestYup.createBuisnessIncome,
        onSubmit: (values) => {
            try {
                let amt = parseFloat(values.amount).toFixed(2);
                let yearTotAmt = (values.anum === 'monthly') ? parseFloat(values.amount * 12).toFixed(2) : amt;
                const taxWithId = {
                    ...values,
                    yearTotAmt,
                    source: 'empInvest',
                    taxType:'income',
                    id: uuidv4(),
                };
                addTaxes(taxWithId);
            } catch (error) {
                ResponseHandler.handleCommonError(error);
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
                            placeholder="primary" />
                        <div className="invalid-feedback">
                            {errors.type}
                        </div>
                    </div>
                    <div className=" col-6">
                        <label htmlFor="validationAmount" className="form-label">Enter Amount</label>
                        <div className='input-group'>
                            <span className="input-group-text" id="basic-addon1">Rs</span>
                            <NumericFormat
                                value={values.amount}
                                onValueChange={(values) => handleChange({ target: { name: 'amount', value: values.value } })}
                                type="text"
                                id='validationAmount'
                                name='amount'
                                className={`form-control ${(errors.amount && touched.amount) ? 'is-invalid' : ''}`}
                                placeholder="15000000"
                                thousandSeparator={true}
                            />
                            <div className="invalid-feedback">
                                {errors.amount}
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-3">
                        <label htmlFor="validationTextarea" className="form-label">Add Description</label>
                        <textarea
                            value={values.description}
                            onChange={handleChange}
                            name='description'
                            className={`form-control ${(errors.description && touched.description) ? 'is-invalid' : ''}`}
                            id="validationTextarea"
                            placeholder="Enter Description"
                        />
                        <div className="invalid-feedback">
                            {errors.description}
                        </div>
                    </div>
                    <div className="col-6 mt-3">
                        <label htmlFor="validationAnum" className="form-label">Annual or monthly</label>
                        <select
                            required
                            id='validationAnum'
                            name='anum'
                            value={values.anum}
                            onChange={handleChange}
                            className={`form-control ${(errors.anum && touched.anum) ? 'is-invalid' : ''}`}
                        >
                            <option value="">Choose</option>
                            <option value="annually">annually</option>
                            <option value="monthly">monthly</option>
                        </select>
                        <div className="invalid-feedback">
                            {errors.anum}
                        </div>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-12">
                        <button type='submit' className='btn btn-success w-100'>Add Investment Income</button>
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
