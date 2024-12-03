import TemplateBanner from "./../../components/banners/templateBanner";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SearchBars from "../../components/bars/searchBars";
import SingleCards from "../../components/cards/singleCards";
import Styles from "./Component.module.css";
import { useState, useEffect } from "react";
import Benefits from "../../components/benefits";

export default function Products() {
    const [albums, setAlbums] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 

    useEffect(() => {
        fetch('./products.json')  
            .then((response) => response.json())
            .then((data) => setAlbums(data));
    }, []); 

    const filteredAlbums = albums.filter((album) =>
        album.band.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <TemplateBanner img="/banners/backgroundB&W.jpg" title="All Products" />
            <SearchBars searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/*Albums */}
            <div className={Styles.albumList}>
                {filteredAlbums.map((album) => (
                    <SingleCards
                        key={album.id} 
                        id={album.id}
                        photoPath={album.photoPath}
                        album={album.album}
                        band={album.band}
                        price={album.price}
                    />
                ))}
            </div>
            <Benefits/>
            <Footer />
        </>
    );
}
