import AnimationlogoFrontground from '../imgs/Animation_logoFrontground.png';
import AnimationlogoBackground from '../imgs/Animation_logoBackground.png';

import styles from '../CSS/AnimationLogo.module.css'
import { useEffect, useState } from 'react';

function AnimationLogo({customClass, minMax}){
    const [newRotate, setNewRotate] = useState();

    function calculeteRotate(){
        document.addEventListener('mousemove', (e)=> {
            let logo = document.getElementById('logo');
            let logoX = Math.round(logo.getBoundingClientRect().x );
            let logoY = Math.round(logo.getBoundingClientRect().y );
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let dx = mouseX - logoX;
            let dy = mouseY - logoY;
    
            let rot = Math.atan2(dy, dx) *100;
            if(Math.sign(rot) !== -1){
                logo.style.rotate = Math.round(rot) + 'deg';
            }
            console.log(Math.round(rot))
        },false)
    }

    return(
        <section className={`${styles.container} ${styles[customClass]}`} id='logo'>
            <img 
                src={AnimationlogoBackground} 
                alt="RadicalBR" 
                className={styles.animationBackground}
            />
            <img 
                src={AnimationlogoFrontground} 
                alt="RadicalBR" 
                className={styles.animationFrontground}
                onClick={()=>{minMax()}}
            />
        </section>
    )
}
export default AnimationLogo;