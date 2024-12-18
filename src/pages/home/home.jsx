 import MainBanner from "../../components/banners/mainBanner";
import MainButton from "../../components/Buttons/mainButton";
import HomeCard from "../../components/cards/homeCard";
import SingleCards from "../../components/cards/singleCards";
import Footer from "../../components/footer";
import Header from "../../components/header";

import Styles from "./Component.module.css";

 
import { useState, useEffect } from 'react';

export default function Home() {
    const [albums, setAlbums] = useState([]);

    
    useEffect(() => {
        fetch('./products.json')  
            .then((response) => response.json())
            .then((data) => setAlbums(data));
    }, []); 

    

    return (
        <>
            <Header/>
            <MainBanner />
            <HomeCard />

            <div style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold", marginBottom: "40px" }}>
                <h2>Some of our Products</h2>
                <div className={Styles.albumList}>
                    {albums.slice(0, 8).map((album) => (
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
            </div>
            <div style={{ textAlign: "center" }}>
                <MainButton 
                link="/products"
                text="show more"
                />
            </div>
           
            <Footer />
        </>
    );
}
