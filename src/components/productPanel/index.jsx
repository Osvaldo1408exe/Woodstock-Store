import Styles from './Component.module.css'
import { Link, Links } from 'react-router-dom'


export default function ProductPanel(props) {
    return (
        <div className={Styles.container}>
            <img src={props.img} alt="Vinyl Record" className={Styles.image} />
            <div className={Styles.infoContainer}>
                <div className={Styles.infoCard}>
                    <h1>{props.album}</h1>
                    <p className={Styles.subtitle}>{props.band}</p>
                    <p className={Styles.price}>${props.price}</p>

                    <p className={Styles.description}>{props.description}</p>

                    <p className={Styles.genreDescription}>Genre</p>
                    <p className={Styles.genre}>{props.genre}</p>
                </div>
                <div className={Styles.buttons}>
                    <Link to={props.LinkCart} className={Styles.buyBtn}><button className={Styles.buyBtn}>Buy Now</button></Link>
                    
                    <button className={Styles.cartBtn}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}