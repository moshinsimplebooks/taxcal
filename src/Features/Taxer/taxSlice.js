import {createSlice,nanoid} from '@reduxjs/toolkit'
import LocalStore from '../../Utils/LocalStore/LocalStore'

const initialState={
    taxes: LocalStore.getTax() ? JSON.parse(LocalStore.getTax()) : [],
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
        }
    }
})

export const{addTax,removeTax} = taxSlice.actions

export default taxSlice.reducer