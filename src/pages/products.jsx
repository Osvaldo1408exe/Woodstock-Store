import TemplateBanner from "../components/banners/templateBanner";
import Header from "../components/header";
import Footer from "../components/footer";


export default function Products() {
    return (
       <>
       <Header/>
       <TemplateBanner img="/banners/backgroundB&W.jpg" title="All Products" />
       <Footer />
       </>
    )
}