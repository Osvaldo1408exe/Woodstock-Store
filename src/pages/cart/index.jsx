import Styles from './Component.module.css'

import Header from "../../components/header";
import Footer from "../../components/footer";
import Benefits from "../../components/benefits";

import TemplateBanner from "./../../components/banners/templateBanner";



export default function Cart() {
    return (
       <>
        <Header/>
        <TemplateBanner
            img="/banners/backgroundB&W.jpg"
            title="Cart"
        />
        <Benefits/>


        <Footer/>
       </>
    )
}