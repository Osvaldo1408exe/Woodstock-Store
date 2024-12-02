import Styles from './Component.module.css'

export default function Benefits() {
    return (
        <div className={Styles.container}>
            <div className={Styles.itens}>
                <img src="/icons/trophy 1.png" alt="trophy" />
                <p>High Quality</p>
            </div>
            <div className={Styles.itens}>
                <img className={Styles.icon} src="/icons/guarantee.png" alt="guarantee" />
                <p>Warranty Protection</p>
                <p>90 days warranty</p>
            </div>
            <div className={Styles.itens}>
                <img className={Styles.icon} src="/icons/shipping.png" alt="shipping" />
                <p>Free Shipping</p>
                <p>Order over 150 $</p>
            </div>
            <div className={Styles.itens}>
                <img className={Styles.icon} src="/icons/customer-support.png" alt="customer support" />
                <p>24 / 7 Support</p>
                <p>Dedicated support</p>
            </div>
            
        </div>
    )
}