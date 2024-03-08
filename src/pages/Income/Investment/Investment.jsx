import React from 'react'
import InvestIncList from './InvestIncList/InvestIncList'
import InvestForm from './InvestForm/InvestForm'

export default function Investment() {
  return (
    <>
            {/* the descrition starts */}
            <div className="row mt-4">
                {/* the list card */}
                <InvestIncList />
                {/* the form area */}
                <InvestForm />
            </div>
        </>
  )
}
