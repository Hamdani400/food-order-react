import classes from './Header.module.css'
import foodImg from '../../assets/food.jpg'
import HeaderCardButton from './HeaderCardButton'

export default function Header () {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <HeaderCardButton />
      </header>
      <div>
        <img
          src={foodImg}
          alt='food hero img'
          className={classes['main-img']}
        />
      </div>
    </>
  )
}
