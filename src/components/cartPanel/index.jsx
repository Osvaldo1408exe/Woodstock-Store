import Styles from './Component.module.css'
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useCart();
  
    const { subtotal, totalItems } = cart.reduce(
      (acc, item) => {
        acc.subtotal += item.price * item.qty;
        acc.totalItems += item.qty;
        return acc;
      },
      { subtotal: 0, totalItems: 0 }
    );
  
    const shipping = 30.0;
    const totalAmount = subtotal + shipping;
  
    if (cart.length === 0) {
      return (
        <div className={Styles.emptyCart}>
          <h4 className={Styles.message}>Cart is empty</h4>
          <Link to="/" className={Styles.continueShopping}>
            <FontAwesomeIcon icon={faArrowCircleLeft} /> Continue Shopping
          </Link>
        </div>
      );
    }
  
    return (
      <section className={Styles.cartSection}>
        <div className={Styles.cartContainer}>
          <div className={Styles.itemsList}>
            <h5 className={Styles.title}>Items List</h5>
            {cart.map((item) => (
              <div key={item.id} className={Styles.item}>
                <img src={item.img} alt={item.album} className={Styles.itemImage} />
                <div className={Styles.itemInfo}>
                  <p className={Styles.itemTitle}>{item.album}</p>
                  <div className={Styles.itemControls}>
                    <button
                      className={Styles.controlButton}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </button>
                    <p className={Styles.quantity}>{item.qty}</p>
                    <button
                      className={Styles.controlButton}
                      onClick={() => addToCart(item)}
                    >
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                  </div>
                  <p className={Styles.price}>
                    {item.qty} x ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          <div className={Styles.summary}>
            <h5 className={Styles.summaryTitle}>Order Summary</h5>
            <ul className={Styles.summaryDetails}>
              <li>
                Products ({totalItems}) <span>${subtotal.toFixed(2)}</span>
              </li>
              <li>
                Shipping <span>${shipping.toFixed(2)}</span>
              </li>
              <li className={Styles.total}>
                Total <span>${totalAmount.toFixed(2)}</span>
              </li>
            </ul>
            <Link  className={Styles.checkoutButton}>
              Checkout
            </Link>
          </div>
        </div>
      </section>
    );
  }