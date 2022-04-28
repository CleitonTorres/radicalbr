import styles from '../CSS/ButtonMenuPolicies.module.css';

function ButtonMenuPolicies ({onClick}){
    return (
        <div 
            className={styles.container}
        >
            <span 
                className={styles.content}
                onClick={()=> {onClick('/policies')}}
            >
                <span className={styles.l_1}>P</span>
                <span className={styles.l_2}>O</span>
                <span className={styles.l_3}>L</span>
                <span className={styles.l_4}>Í</span>
                <span className={styles.l_5}>T</span>
                <span className={styles.l_6}>I</span>
                <span className={styles.l_7}>C</span>
                <span className={styles.l_8}>A</span>
                <span className={styles.l_9}>S</span>
            </span>
        </div>
    );
}
export default ButtonMenuPolicies;