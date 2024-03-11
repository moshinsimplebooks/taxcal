import {createSlice} from '@reduxjs/toolkit'
import LocalStore from '../../Utils/LocalStore/LocalStore'

const initialState={
    taxes: LocalStore.getTax() ? JSON.parse(LocalStore.getTax()) : [],
    rentLimiter: false,
    solarLimiter: false,
}

export  const taxSlice = createSlice({
    name:'tax',
    initialState,
    reducers:{
        addTax:(state,action)=>{
            state.taxes.push(action.payload)
        },
        removeTax:(state,action)=>{
            state.taxes = state.taxes.filter((tax)=>(
                tax.id!==action.payload
            ))
        },
        setRentLimiter:(state,action)=>{
            state.rentLimiter = action.payload
        },
        setSolarLimiter:(state,action)=>{
            state.solarLimiter = action.payload
        },
    }
})

export const{addTax,removeTax,setRentLimiter,setSolarLimiter} = taxSlice.actions

export default taxSlice.reducer