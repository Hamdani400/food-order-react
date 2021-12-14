import Modal from '../UI/Modal'
import classes from './Cart.module.css'

export default function Cart () {
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
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>30.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}
