import React from 'react'
import BuisnessIncList from './BuisnessIncList/BuisnessIncList'
import BuisnessForm from './BuisnessForm/BuisnessForm'

export default function Buisness() {
    return (
        <>
            {/* the descrition starts */}
            <div className="row mt-4">
                {/* the list card */}
                <BuisnessIncList />
                {/* the form area */}
                <BuisnessForm />
            </div>
        </>
    )
}
