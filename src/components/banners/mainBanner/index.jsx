import { Link } from 'react-router-dom';
import Styles from './Component.module.css';

export default function MainBanner() {
    return (
        <section className={Styles.collection}>
            <div className={Styles.imageContainer}>
                <img src="/banners/Homebackground.png" alt="Vinyl Record" className={Styles.image} />
            </div>
            <div className={Styles.infoContainer}>
                <div className={Styles.infoCard}>
                    <p className={Styles.subtitle}>Releases</p>
                    <h1>Discover Our New Collection</h1>
                    <Link to="/products" className={Styles.btn}>Buy Now</Link>
                </div>
            </div>
        </section>
    );
}
