import Styles from './Component.module.css'

export default function ItemBar({album}) {
    return (
        <div className={Styles.container}>
            <p>|</p>
            <p className={Styles.album}>{album}</p>
        </div>
    );
}