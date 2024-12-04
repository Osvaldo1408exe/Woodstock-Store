import Styles from './Component.module.css'

import Header from "../../components/header";
import Footer from "../../components/footer";
import Benefits from "../../components/benefits";

import TemplateBanner from "./../../components/banners/templateBanner";
import CartPanel from '../../components/cartPanel';



export default function Cart() {
    return (
       <>
        <Header/>
        <TemplateBanner
            img="/banners/backgroundB&W.jpg"
            title="Cart"
        />
        <CartPanel></CartPanel>
        <Benefits/>
        <Footer/>
       </>
    )
}