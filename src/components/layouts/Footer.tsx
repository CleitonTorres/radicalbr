import styles from '../CSS/Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer (){
    return (
        <footer className={styles.footerContainer}>
            <h2><span>Radical BR</span> - Esporte de Aventura</h2>
            <h3>Copyright</h3>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
        </footer> 
    )
}
export default Footer;