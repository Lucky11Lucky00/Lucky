// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'Califlower', price: 200.5 },
            { name: 'potato', price: 100.8 }
        ],
        nonveg: [
            { name: 'chicken', price: 500.5 },
            { name: 'France', price: 1100.8 }
        ]
    },
    reducers: {}
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addTocart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1; 
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const itemIndex = state.findIndex(item => item.name === action.payload.name);
            if (itemIndex !== -1) {
                const item = state[itemIndex];
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // Remove the item if quantity is 1 and decrement is clicked
                    state.splice(itemIndex, 1);
                }
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        applyDiscount: (state, action) => {
            state.discount = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export const { addTocart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default store;
