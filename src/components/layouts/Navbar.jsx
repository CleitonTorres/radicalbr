import { Link } from 'react-router-dom';

import styles from '../CSS/Navbar.module.css';
import AnimationLogo from '../Animations/AnimationLogo';
import { useState } from 'react';

function Navbar() {
    const [minMax, setMinMax] = useState('max');

    function minimizeMaximize (){
        if(minMax === 'max') {
            setMinMax('min')
        } else {
            setMinMax('max')
            window.scrollTo(0, 0)
        }
    }

    return (
        <nav className={`${styles.navbar} ${styles[minMax]}`}>
            {minMax !== 'min' &&
                <div className={styles.container}>
                    <div className={styles.divTop}>
                        <Link 
                            onClick={()=>{minimizeMaximize()}}
                            to="/home">
                            Home
                        </Link>
                        <Link 
                            onClick={()=>{minimizeMaximize()}}
                            to="/company" id='company'>
                            Empresa
                        </Link>
                    </div>
                    <div className={styles.divBottom}>
                        <Link 
                            onClick={()=>{minimizeMaximize()}}
                            to="/contact">
                            Contato
                        </Link>
                        <Link 
                            onClick={()=>{minimizeMaximize()}}
                            to="/policies">
                            Políticas
                        </Link>
                    </div>
                </div>
            }
            <AnimationLogo customClass={minMax} minMax={minimizeMaximize}/>
        </nav>
    ); 
}
export default Navbar;