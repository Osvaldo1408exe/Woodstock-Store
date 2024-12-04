import Styles from './Component.module.css'
import { Link } from 'react-router-dom'
import {useCart} from '../../context/CartContext';



export default function ProductPanel(props) {

    const { addToCart } = useCart();

    const item = {
        id: props.id,
        img: props.img,
        album: props.album,
        band: props.band,
        price: props.price,
        description: props.description,
        genre: props.genre,
    };
    

    return (
        <div className={Styles.container}>
            <img src={props.img} alt="Album" className={Styles.image} />
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
                    <Link to="/cart" className={Styles.buyBtn}><button className={Styles.buyBtn} onClick={() => addToCart(item)}>Buy Now</button></Link>
                    
                    <button className={Styles.cartBtn}  onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}