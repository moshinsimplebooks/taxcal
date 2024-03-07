import React from 'react'

export default function Buisness() {
  return (
    <>
     {/* the descrition starts */}
     <div className="row mt-4">
                {/* the list card */}
                <div className="col-sm-7 mb-3 mb-sm-0">
                    <div className="card border-0">
                        <div className="card-body py-0">
                            <h5 className="card-title">Buisness Income</h5>
                            <p className="card-text">All income received from employment including allowances and any bonus.</p>
                            <div>
                                <table className="table table-striped" >
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Secondary</td>
                                            <td>
                                                tatum adipisci sequi sed?
                                            </td>
                                            <td>Rs 10000</td>
                                            <td className='text-center'>
                                                <i className="fa-solid fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                {/* the form area */}
                <div className="col-sm-5">
                    <form className="has-validation">
                        <div className="row mb-2">
                            <div className="col-6">
                                <label htmlFor="validationTextarea" className="form-label">Enter Type</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="saman siri" />
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                            <div className=" col-6">
                                <label htmlFor="validationTextarea" className="form-label">Enter Amount</label>
                                <div className='input-group'>
                                    <span className="input-group-text" id="basic-addon1">Rs</span>
                                    <input type="text" className="form-control" placeholder="15000000" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationTextarea" className="form-label">Add Description</label>
                            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required />
                            <div className="invalid-feedback">
                                Please enter a message in the textarea.
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
            </div>
    </>
  )
}
