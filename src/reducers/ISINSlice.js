import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
}

export const ISINSlice = createSlice({
    name: 'isin',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload.id
        },
    }
})

export const { setId } = ISINSlice.actions

export default ISINSlice.reducer