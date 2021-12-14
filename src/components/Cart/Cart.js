import Modal from '../UI/Modal'
import classes from './Cart.module.css'

export default function Cart (props) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'c1',
          name: 'Nasgor',
          amount: 2,
          price: 30.99
        }
      ].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>30.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}
