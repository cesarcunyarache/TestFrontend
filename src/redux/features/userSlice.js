import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: {}
}

export const reservaSlice = createSlice({
    name: 'reserva',
    initialState,
    reducers: {
        update: (state, action) => {
            console.log(action.payload)
            state.value = { ...state.value, ...action.payload };
        },
    }
});

export const {update} = reservaSlice.actions;

export default reservaSlice.reducer;

