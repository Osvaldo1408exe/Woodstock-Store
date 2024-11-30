import Styles from './Component.module.css'
export default function MainButton(props) {
    return (
        <a href={props.link}><button className={Styles.btn} >{props.text}</button></a>
    )
}