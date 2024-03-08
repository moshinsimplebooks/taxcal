import React from 'react'
import HousingIncList from './HousingDedList/HousingDedList'
import HousingForm from './HousingForm/HousingForm'

export default function Investment() {
  return (
    <>
      <div className="row mt-4">
        {/* the list card */}
        <HousingIncList />
        {/* the form area */}
        <HousingForm />
      </div>
    </>
  )
}
