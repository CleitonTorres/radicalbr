import styles from '../CSS/ButtonMenuEmpresa.module.css';

function ButtonMenuEmpresa ({onClick}){
    return (
        <div 
            className={styles.container}
        >
            <span 
                className={styles.content}
                onClick={()=> {onClick('/company')}}
            >
                <span className={styles.l_1}>E</span>
                <span className={styles.l_2}>M</span>
                <span className={styles.l_3}>P</span>
                <span className={styles.l_4}>R</span>
                <span className={styles.l_5}>E</span>
                <span className={styles.l_6}>S</span>
                <span className={styles.l_7}>A</span>
            </span>
        </div>
    );
}
export default ButtonMenuEmpresa;