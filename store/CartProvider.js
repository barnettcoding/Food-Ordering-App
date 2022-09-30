import CartContext from './cart-context'
import { useReducer } from 'react'
import React from 'react'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action ) => {
    if (action.type === 'ADD') {
        const updatedTotal = state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;

        if (existingCartItem) {
        
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }
   
       
        return {
            items: updatedItems,
            totalAmount: updatedTotal
        }
    }
    if (action.type === 'REMOVE') {
        
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotal = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
        const updatedItem = {...existingItem, amount: existingItem.amount - 1};
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem;
        }
    
    return {
        items: updatedItems,
        totalAmount: updatedTotal
    }}
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCart({type: 'ADD', item: item})
    }
    const removeItemHandler = (id) => {
        dispatchCart({type: 'REMOVE', id: id});
    };
    const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
    };
  return (<CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
}

export default CartProvider;