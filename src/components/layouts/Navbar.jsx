import { Link, useNavigate } from 'react-router-dom';

import AnimationlogoFrontground from '../imgs/Animation_logoFrontground.png';
import AnimationlogoBackground from '../imgs/Animation_logoBackground.png';
import styles from '../CSS/Navbar.module.css';
import stylesLogo from '../CSS/AnimationLogo.module.css';

import { useState } from 'react';
import bg_btn_top_active from '../imgs/Animation_Button_Top-active.png';
import bg_Btn from '../imgs/Animation_Buttons.png'

function Navbar() {
    const [minMax, setMinMax] = useState('max');
    const [minMaxContainer, setMinMaxContainer] = useState('maxContainer');
    const [customBtns, setCustomBtns] = useState('');
    const navigate = useNavigate()

    function minimizeMaximize (){
        if(minMax === 'max') {
            setMinMax('min')
            setMinMaxContainer('minContainer')
        } else {
            setMinMax('max')
            setMinMaxContainer('maxContainer')
            window.scrollTo(0, 0)
        }
    }

    function btnClik(page){
        navigate(page);
        minimizeMaximize();
    }

    function hoverIn(id){
        console.log('entrou')
        if(id === 'btnTop') {
            setCustomBtns('activeBtnTop')
        }
        if(id === 'btnRight') {
            setCustomBtns('activeBtnRight')
        }
        if(id === 'btnLeft') {
            setCustomBtns('activeBtnLeft')
        }
        if(id === 'btnBottom') {
            setCustomBtns('activeBtnBottom')
        }
    }
    function hoverOut(){
        console.log('saiu')
        setCustomBtns('')
    }
    
    return (
        <nav 
            className={`${styles.navbar} ${styles[minMax]}`}
            id={'nav'}
        >
            <div id='logo' className={`${stylesLogo.container} ${stylesLogo[minMaxContainer]}`}>
                <div className={`${stylesLogo.content} ${stylesLogo[minMax]}`}>
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
            </div>
            {minMax !== 'min' &&
                <div 
                    className={`${styles.container} ${styles[customBtns]}`}
                    id="container"
                >
                    <div className={styles.content}>
                        <span 
                            className={`${styles.btnTop}`} 
                            onClick={()=>{btnClik('/home')}}
                            onMouseEnter={()=> hoverIn('btnTop')}
                            onMouseLeave={()=>{hoverOut()}}
                            id="btnTop"
                        ></span>
                        <span 
                            className={styles.btnRight} 
                            onClick={()=>{btnClik('/contact')}}
                            onMouseEnter={()=> hoverIn('btnRight')}
                            onMouseLeave={()=>{hoverOut()}}
                            id="btnRight"
                        ></span>
                        <span 
                            className={styles.btnLeft} 
                            onClick={()=>{btnClik('/company')}}
                            onMouseEnter={()=> hoverIn('btnLeft')}
                            onMouseLeave={()=>{hoverOut()}}
                            id="btnLeft"
                        ></span>
                        <span 
                            className={styles.btnBottom} 
                            onClick={()=>{btnClik('/policies')}}
                            onMouseEnter={()=> hoverIn('btnBottom')}
                            onMouseLeave={()=>{hoverOut()}}
                            id="btnBottom"
                        ></span>
                    </div>
                </div> 
            }
        </nav> 
    ); 
}
export default Navbar;