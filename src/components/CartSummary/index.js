// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.reduce(
        (acc, eachCartItem) => acc + eachCartItem.price * eachCartItem.quantity,
        0,
      )

      const totalCartItems = cartList.reduce(
        (acc, eachCartItem) => acc + eachCartItem.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-value">
            Order Total:{' '}
            <span className="order-total-label">Rs {totalAmount}/-</span>
          </h1>
          <p className="total-items">{totalCartItems} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
