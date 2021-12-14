import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

export default function MealItem (props) {
  const { name, description, price } = props
  const priceFormat = `$${price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormat}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  )
}
