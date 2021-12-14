import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'

export default function HeaderCardButton (props) {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce(
    (curr, item) => curr + item.amount,
    0
  )

  return (
    <button className={classes.button} {...props}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
