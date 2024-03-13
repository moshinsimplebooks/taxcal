import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTax } from '../../../../Features/Taxer/taxSlice'
import LocalStore from '../../../../Utils/LocalStore/LocalStore';
import Toaster from '../../../../Utils/Toaster/Toaster';

export default function DonationDedList() {
  const taxes = useSelector((state) => state.taxes)
  const filterDonationTaxes = taxes.filter(tax => tax.source === "dedDonation")

  const dispatch = useDispatch()
  const handleDeletes = (id) => {
    // Filter out the todo item with the specific id
    dispatch(removeTax(id))
    const newTaxes = filterDonationTaxes.filter((tax) => tax.id !== id);
    LocalStore.storeTax(JSON.stringify(newTaxes))
    // Update local storage to reflect the change
    Toaster.justToast('info', 'Deleted', () => { })
  };

  return (
    <div className="col-sm-7 mb-3 mb-sm-0">
      <div className="card border-0">
        <div className="card-body py-0">
          <h5 className="card-title">Donation Deductions</h5>
          <p className="card-text">All Donations including allowances and any bonus.</p>
          <div>
            <table className="table table-striped" >
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Anum</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {
                  filterDonationTaxes.length > 0 ? (
                    filterDonationTaxes.map((tax) => (
                      <tr key={tax.id}>
                        <td>{tax.type}</td>
                        <td>{tax.description}</td>
                        <td>Rs {parseFloat(tax.amount).toFixed(2)}</td>
                        <td>{tax.anum}</td>
                        <td className='text-center' style={{ cursor: 'pointer' }}>
                          <i onClick={() => {
                            handleDeletes(tax.id)
                          }} className="fa-solid fa-trash text-danger"></i>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No results</td>
                    </tr>
                  )
                }

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}
