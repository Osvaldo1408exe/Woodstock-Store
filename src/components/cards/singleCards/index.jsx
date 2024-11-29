import Styles from'./Component.module.css'

export default function SingleCards(props) {
    return (
        <>
        <div className={Styles.card} key={props.id}>
            <img src={props.photoPath} alt={props.album} />
            <p className={Styles.album}>{props.album}</p>
            <p className={Styles.band}>{props.band}</p>
            <p className={Styles.price}>${props.price}</p>
        </div>
        </>
    )
}