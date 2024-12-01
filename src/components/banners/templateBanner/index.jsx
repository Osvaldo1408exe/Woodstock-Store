import Styles from "./Component.module.css";
export default function TemplateBanner(props) {
    return (
        <>
            <div className={Styles.container}>
                <img src={props.img} alt="Vinyl Record" className={Styles.image} />
                <div className={Styles.infoContainer}>
                    <div className={Styles.infoCard}>
                        <h1>{props.title}</h1>
                        <p className={Styles.subtitle}>{props.subtitle}</p>
                    </div>
                </div>
            </div>
        </>
    );
}