import React from 'react'
import OtherIncList from './OtherIncList/OtherIncList'
import OtherIncForm from './OtherForm/OtherForm'

export default function Other() {
  return (
    <>
            {/* the descrition starts */}
            <div className="row mt-4">
                {/* the list card */}
                <OtherIncList />
                {/* the form area */}
                <OtherIncForm />
            </div>
        </>
  )
}
