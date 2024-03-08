import React from 'react'
import EducationDedList from './EducationalDedList/EducationalDedList'
import EducationForm from './EducationalForm/EducationalForm'

export default function Investment() {
  return (
    <>
      <div className="row mt-4">
        {/* the list card */}
        <EducationDedList />
        {/* the form area */}
        <EducationForm />
      </div>
    </>
  )
}
