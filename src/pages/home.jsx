import MainBanner from "../components/banners/mainBanner";
import HomeCard from "../components/cards/homeCard";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
    return (
        <>
            <Header/>
            <MainBanner/>
            <HomeCard/>
            <Footer/>
        </>
    );
}