import Styles from './Component.module.css'

export default function HomeCard() {
    return(
        <>
            <div className={Styles.info}>
                <h2>Search by genre</h2>
                <p>browse our huge range of products</p>
            </div>

            <div className={Styles.cards}>
                <div className={Styles.card}>
                    <img src="/albums/suede.png" alt="Britpop" />
                    <p>Britpop</p>
                </div>
                <div className={Styles.card}>
                    <img src="/albums/disintegration_theCure.jpg" alt="Gothic rock" />
                    <p>Gothic rock</p>
                </div>
                <div className={Styles.card}>
                    <img src="/albums/dirt_AliceInChains.jpg" alt="Grunge" />
                    <p>Grunge</p>
                </div>
            </div>



        </>
    )
}