import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'

export default function HeaderCardButton (props) {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)
  // const { items } = cartCtx

  const numberOfCartItems = cartCtx.items.reduce(
    (curr, item) => curr + item.amount,
    0
  )

  const classBtn = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ''
  }`

  useEffect(() => {
    if (cartCtx.items < 1) {
      return
    }
    setButtonIsHighlighted(true)
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false)
    }, 300)

    return () => {
      clearInterval(timer)
    }
  }, [cartCtx.items])

  return (
    <button className={classBtn} {...props}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
