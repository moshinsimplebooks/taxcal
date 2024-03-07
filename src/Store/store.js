import {configureStore} from '@reduxjs/toolkit'
import taxReducer from '../Features/Taxer/taxSlice'

export const store = configureStore({
    reducer:taxReducer,
})