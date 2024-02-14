import { configureStore } from '@reduxjs/toolkit'
import ISINReducer from './reducers/ISINSlice'

export const store = configureStore({
    reducer: {
        isin: ISINReducer
    },
})