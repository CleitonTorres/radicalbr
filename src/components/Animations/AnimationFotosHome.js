import foto01 from '../imgs/Fotos/galeriaHome/foto01.jpg';
import foto02 from '../imgs/Fotos/galeriaHome/foto02.jpg';
import foto03 from '../imgs/Fotos/galeriaHome/foto03.jpg';
import foto04 from '../imgs/Fotos/galeriaHome/foto04.jpg';
import foto05 from '../imgs/Fotos/galeriaHome/foto05.jpg';

import styles from '../CSS/AnimationFotosHome.module.css'
import { Link } from 'react-router-dom';

function AnimationFotosHome(){
    function scrollTo (x, y) {
        window.scrollTo(x, y)
    }
    return(
        <section className={styles.animation_container}>
            <div className={styles.divFotos}>
                <Link to="/company#rapel" onClick={()=>{scrollTo(100, 100)}}>
                    <img 
                        src={foto01} 
                        alt="RadicalBR" 
                        className={styles.animationFoto01}
                    />
                </Link>
                
            </div>  
            <div className={styles.divFotos}>
                <Link to="/company#remada" onClick={()=>{scrollTo(100, 100)}}>
                    <img 
                        src={foto02} 
                        alt="RadicalBR" 
                        className={styles.animationFoto02}
                    />
                </Link>                
            </div>   
            <div className={styles.divFotos}>
                <Link to="/company#rafting" onClick={()=>{scrollTo(100, 100)}}>
                    <img 
                        src={foto03} 
                        alt="RadicalBR" 
                        className={styles.animationFoto03}
                    />
                </Link>                
            </div>        
        </section> 
    )
}
export default AnimationFotosHome;