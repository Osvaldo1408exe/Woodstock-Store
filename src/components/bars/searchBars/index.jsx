import Styles from './Component.module.css'
export default function SearchBars({searchTerm, setSearchTerm}){
    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.searchBar}>
                    <input type="text" placeholder="Search by band"   value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
            </div>

        </>
    )
}