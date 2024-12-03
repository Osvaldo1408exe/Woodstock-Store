import Header from "../../components/header";
import ItemBar from "../../components/bars/item";
import SingleCards from "../../components/cards/singleCards";
import Footer from "../../components/footer";


import data from '../../../public/products.json';
import { useParams } from "react-router-dom";
import ProductPanel from "../../components/productPanel";
import Marquee from "react-fast-marquee";
 
export default function Item() {
    const {id} = useParams();

    const item = data.find(item => item.id == id);
 

    return (
        <>
            <Header />
            <ItemBar album={item.album} />
            <ProductPanel key={item.id}
            id={item.id}
            img={item.photoPath}
            album={item.album} 
            band={item.band} 
            price={item.price}
            description={item.summary}
            genre={item.genre}
            />
              
            <h2 style={{ marginLeft: "40px", marginTop: "180px" }}>Related Products</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
                {data.map(item => (
                    <SingleCards
                        key={item.id}
                        id={item.id}
                        photoPath={item.photoPath}
                        album={item.album}
                        band={item.band}
                        price={item.price}
                    />
                ))}
            </Marquee>


            <Footer />

        </>
    );
}
