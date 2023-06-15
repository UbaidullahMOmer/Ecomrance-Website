const {createSlice} = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        add(state, action){
            state.push(action.payload);
        },
        remove: (state, action) => {
            const itemId = action.payload;
            return state.filter(item => item.id !== itemId);
          },
    },
});
export const{add, remove} = cartSlice.actions;
export default cartSlice.reducer;