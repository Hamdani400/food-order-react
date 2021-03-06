import { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

export default function MealItem (props) {
  const cartCtx = useContext(CartContext)

  const { id, name, description, price } = props
  const priceFormat = `$${price.toFixed(2)}`

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormat}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}
