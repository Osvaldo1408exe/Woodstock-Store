import { Link } from 'react-router-dom'
import Styles from'./Component.module.css'

export default function SingleCards(props) {
    return (
        <>
            <div className={Styles.card}>
                <img src={props.photoPath} alt={props.album} />
                <Link to={`/products/${props.id}`} className={Styles.buyBtn}>Buy Now</Link>
                <p className={Styles.album}>{props.album}</p>
                <p className={Styles.band}>{props.band}</p>
                <p className={Styles.price}>${props.price}</p>
            </div>
        </>
    );
}
