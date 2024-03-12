import React, { useState } from 'react'
import DocumentService from '../../Services/DocumentService';
import Toaster from '../../Utils/Toaster/Toaster';

export default function Apit() {
    const [base64String, setBase64String] = useState('');
    const [extractedApit, setExtractedApit] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64 = reader.result.toString().split(',')[1];
            setBase64String(base64);
        };
    };

    const sendDocument = async (event) => {
        setLoading(true)
        event.preventDefault();
        Toaster.loadingToast('Uploading APIT');
        try {
            const result = await DocumentService.postPdf(base64String);
            if (result.status === 202) {
                setTimeout(async () => {
                    try {
                        const analyzeResult = await DocumentService.getAnalyzed(result.headers['apim-request-id']);
                        // const analyzeResult = await DocumentService.getAnalyzed("d07fdf63-268b-4ee2-a04d-250b81c69b57");
                        console.log(analyzeResult.data.analyzeResult.documents[0].fields);
                        setExtractedApit(analyzeResult.data.analyzeResult.documents[0].fields);
                        Toaster.justToast('success', 'Uploaded APIT', () => { });
                    } catch (error) {
                        Toaster.justToast('error', error.message || 'Error while analyzing document', () => { });
                        console.error(error);
                    } finally {
                        Toaster.dismissLoadingToast();
                        setLoading(false)

                    }
                }, 10000);
            }
        } catch (error) {
            Toaster.justToast('error', error.message || 'Error while uploading document', () => { });
            console.error(error);
            Toaster.dismissLoadingToast();
            setLoading(false)
        }
    };

    const splitValue = (inputString) => {
        if (!inputString || !inputString.includes(' ')) {
            return inputString;
        } else {
            return inputString.split(' ')[1];
        }
    };
    const extractYearSubstring = (inputString) => {
        const regex = /\d{4}\./; // Matches four digits followed by a dot (year pattern)

        const match = inputString.match(regex); // Find the match
        if (match) {
            const yearIndex = match.index; // Get the index of the match
            const result = inputString.substring(0, yearIndex + 4); // Extract the substring including the year
            return result;
        } else {
            return "No year found in the string.";
        }
    }
    return (
        <div className="row mt-4">
            <div className="col-5">
                <h3 className='mb-1'>Upload Your APIT Document</h3>
                <p className='mb-4'>APIT is the advanced personal income tax file</p>
                <div className="mb-3">
                    <form onSubmit={sendDocument}>
                        <input type="file" required onChange={handleFileInputChange} className="form-control mb-2" />
                        <button disabled={loading} type='submit' className='btn btn-success'>Submit APIT</button>
                    </form>
                </div>

            </div>
            <div className="col-7">
                {
                    extractedApit ? (
                        <>
                            <h3 className='text-center mb-4 text-success fw-bolder'>APIT Details</h3>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label">Year Of Assessment</label>
                                    <input type="email" disabled value={extractedApit.year_of_assessment.valueString} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                                    <input type="email" disabled value={extractedApit.full_name.valueString} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">NIC</label>
                                    <input type="email" disabled value={extractedApit.nic.valueString} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">TIN</label>
                                    <input type="email" disabled value={extractedApit.tin_no.valueString} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Pay Sheet Serial</label>
                                    <input type="email" disabled value={extractedApit.pay_sheet_serial.valueString} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Remuneration From</label>
                                    <input type="email" disabled value={extractYearSubstring(extractedApit.remuneration_from.valueString)} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Remuneration To</label>
                                    <input type="email" disabled value={extractYearSubstring(extractedApit.remuneration_to.valueString)} className="form-control" id="inputEmail4" />
                                </div>

                                <p className='mb-0'>Total Gross Remuneration as per APIT pay sheet</p>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 22/23</label>
                                    <input type="email" disabled value={` Rs.${splitValue(extractedApit.total_gross_renumeration.valueString)}`} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 2024</label>
                                    <input type="email" disabled value={` Rs.${splitValue(extractedApit.total_gross_renumeration.valueString)}`} className="form-control" id="inputEmail4" />
                                </div>

                                <p className='mb-0'>Total Cash Benifits</p>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 22/23</label>
                                    <input type="email" disabled value={` Rs.${splitValue(extractedApit.cash_benefit.valueString)}`} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 2024</label>
                                    <input type="email" disabled value={` Rs.${splitValue(extractedApit.cash_benefit.valueString)}`} className="form-control" id="inputEmail4" />
                                </div>

                                <p className='mb-0'>Total Non Cash Benifits</p>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 22/23</label>
                                    <input type="email" disabled value={`${splitValue(extractedApit.non_cash_benefit.valueString)}`} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 2024</label>
                                    <input type="email" disabled value={`${splitValue(extractedApit.non_cash_benefit.valueString)}`} className="form-control" id="inputEmail4" />
                                </div>

                                <p className='mb-0'>Value of Benefits Excluded for Tax </p>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 22/23</label>
                                    <input type="email" disabled value={`${splitValue(extractedApit.value_of_benefits_excluded_for_tax.valueString)}`} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 2024</label>
                                    <input type="email" disabled value={`${splitValue(extractedApit.value_of_benefits_excluded_for_tax.valueString)}`} className="form-control" id="inputEmail4" />
                                </div>

                                <p className='mb-0'>Total amount of tax deducted</p>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 22/23</label>
                                    <input type="email" disabled value={`${extractedApit.total_tax_deducted_22.valueString}`} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6 mt-0">
                                    <label htmlFor="inputEmail4" className="form-label">For 2024</label>
                                    <input type="email" disabled value={`${extractedApit.total_tax_deducted_23.valueString}`} className="form-control" id="inputEmail4" />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label">Total amount remitted to the Inland Revenue Department</label>
                                    <input type="email" disabled value={`Rs ${extractedApit.total_tax_deducted_23.valueString}`} className="form-control" id="inputEmail4" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Name of the Employer</label>
                                    <input type="email" disabled value={`${extractedApit.employer_name.valueString}`} className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6 mb-5">
                                    <label htmlFor="inputEmail4" className="form-label">Address of the Employer</label>
                                    <input type="email" disabled value={`${extractedApit.employer_address.valueString}`} className="form-control" id="inputEmail4" />
                                </div>
                            </form>
                        </>

                    ) : ('')
                }
            </div>
        </div>
    )
}
