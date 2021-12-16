import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  amount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    )

    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    // const updatedItem = state.items.concat(action.item)
    const updatedAmount = state.amount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      amount: updatedAmount
    }
  }
  if (action.type === 'REMOVE') {
    const removingCartItemIndex = state.items.findIndex(
      item => item.id === action.id
    )
    const removingCartItem = state.items[removingCartItemIndex]
    const updatedTotalAmount = state.amount - removingCartItem.price
    let updatedItems

    if (removingCartItem.amount > 1) {
      const updatedItem = {
        ...removingCartItem,
        amount: removingCartItem.amount - 1
      }
      updatedItems = [...state.items]
      updatedItems[removingCartItemIndex] = updatedItem
    }
    if (removingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    }
    return {
      items: updatedItems,
      amount: updatedTotalAmount
    }
  }
  return defaultCartState
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const removeItemHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.amount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
