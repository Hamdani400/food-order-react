import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  amount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItem = state.items.concat(action.item)
    const updatedAmount = state.amount + state.items.price * state.items.amount
    return {
      items: updatedItem,
      amount: updatedAmount
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
