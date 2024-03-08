import React from 'react'
import MedicalIncList from './MedicalDedList/MedicalDedList'
import MedicalForm from './MedicalForm/MedicalForm'

export default function Investment() {
  return (
    <>
      <div className="row mt-4">
        {/* the list card */}
        <MedicalIncList />
        {/* the form area */}
        <MedicalForm />
      </div>
    </>
  )
}
