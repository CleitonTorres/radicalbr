import { Link, useNavigate } from 'react-router-dom';

import AnimationlogoFrontground from '../imgs/Animation_logoFrontground.png';
import AnimationlogoBackground from '../imgs/Animation_logoBackground.png';
import styles from '../CSS/Navbar.module.css';
import stylesLogo from '../CSS/AnimationLogo.module.css';

import { useState } from 'react';
import ButtonMenuHome from './ButtonMenuHome';
import ButtonMenuEmpresa from './ButtonMenuEmpresa';
import ButtonMenuContato from './ButtonMenuContato';
import ButtonMenuPolicies from './ButtonMenuPolicies';

function Navbar() {
    const [minMax, setMinMax] = useState('max');
    const navigate = useNavigate()

    function minimizeMaximize (){
        if(minMax === 'max') {
            setMinMax('min')
        } else {
            setMinMax('max')
            window.scrollTo(0, 0)
        }
    }

    function navGate(local){
        navigate(local);
        minimizeMaximize();
    }

    return (
        <nav 
            className={`${styles.navbar} ${styles[minMax]}`}
            id={'nav'}
        >
            <div id='logo' className={`${stylesLogo.container} ${stylesLogo[minMax]}`}>
                <img 
                    src={AnimationlogoBackground} 
                    alt="RadicalBR" 
                    className={stylesLogo.animationBackground}
                />
                <img 
                    src={AnimationlogoFrontground} 
                    alt="RadicalBR" 
                    className={stylesLogo.animationFrontground}
                    onClick={()=>{minimizeMaximize()}}
                />
            </div>
            {minMax !== 'min' &&
                <div className={styles.container}>
                    <div className={styles.divTop}>
                        <ButtonMenuHome onClick={navGate}/>
                        <ButtonMenuEmpresa onClick={navGate}/>
                        <ButtonMenuContato onClick={navGate}/>
                        <ButtonMenuPolicies onClick={navGate}/>
                    </div>
                </div>
            }
        </nav> 
    ); 
}
export default Navbar;