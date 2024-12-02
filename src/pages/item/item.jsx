// import Styles from "./Component.module.css";

import { useParams } from "react-router-dom";

export default function Item(){
    const { id } = useParams();  // Acessando o id da URL

    return(
    <>
        <h1>{id}</h1>
    </>
    )
}