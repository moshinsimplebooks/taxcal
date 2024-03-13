import React from 'react'
import DonationDedList from './DonationDedList/DonationDedList'
import DonationForm from './DonationForm/DonationForm'

export default function Donation() {
  return (
    <>
      <div className="row mt-4">
        {/* the list card */}
        <DonationDedList />
        {/* the form area */}
        <DonationForm />
      </div>
    </>
  )
}
