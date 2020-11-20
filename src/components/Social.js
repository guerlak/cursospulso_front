import styles from '../../styles/Social.module.css'
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

export default function Social(){
    return(
        <div className={styles.container}>
            <a href="https://www.facebook.com/cursospulso" target="_blank">
                <FaFacebook size={40}/>
            </a>
            <a href="https://www.instagram.com/cursospulso/" target="_blank">
                <FaInstagram size={40}/>
            </a>
        </div>
    )
}