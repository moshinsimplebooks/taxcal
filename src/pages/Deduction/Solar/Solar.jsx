import React from 'react'
import SolarIncList from './SolarDedList/SolarDedList'
import SolarForm from './SolarForm/SolarForm'

export default function Investment() {
  return (
    <>
      <div className="row mt-4">
        {/* the list card */}
        <SolarIncList />
        {/* the form area */}
        <SolarForm />
      </div>
    </>
  )
}
