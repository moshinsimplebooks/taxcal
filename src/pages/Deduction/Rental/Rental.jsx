import React from 'react'
import RentalIncList from './RentalDedList/RentalDedList'
import RentalForm from './RentalForm/RentalForm'

export default function Investment() {
  return (
    <>
      <div className="row mt-4">
        {/* the list card */}
        <RentalIncList />
        {/* the form area */}
        <RentalForm />
      </div>
    </>
  )
}
