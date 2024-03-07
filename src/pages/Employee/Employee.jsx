import React, { useState } from 'react'
import EmpIncList from './EmpIncList/EmpIncList'
import EmpForm from './EmpForm/EmpForm'
import LocalStore from '../../Utils/LocalStore/LocalStore';
import Toaster from '../../Utils/Toaster/Toaster';

export default function Employee() {
    const [taxes, setTaxes] = useState(() => {
        // Get the tasks from local storage
        const savedTasks = LocalStore.getTax()
        if (savedTasks) {
            return JSON.parse(savedTasks);
        } else {
            return [];
        }
    });
    
    return (
        <>
            {/* the descrition starts */}
            <div className="row mt-4">
                {/* the list card */}
                <EmpIncList />
                {/* the form area */}
                <EmpForm />
            </div>
        </>
    )
}
