import { createSlice } from '@reduxjs/toolkit'

const initialStete = {
    items:[
        'Model S',
        'Model 3',
        'Model X',
        'Model Y',
        'Solar Roof',
        'Solar Panels',
    ],
};

const menuItemSlice = createSlice ({
    name: 'item',
    initialStete,
    reducer:{},
});

export const selectMenuItems = (state) => state.menuItem.items;

export default menuItemSlice.reducer;