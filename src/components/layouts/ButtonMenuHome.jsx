import styles from '../CSS/ButtonMenuHome.module.css';

function ButtonMenu ({onClick}){
    return (
        <div 
            className={styles.container}
        >
            <span 
                className={styles.content}
                onClick={()=> {onClick('/home')}}
            >
                <span className={styles.l_1}>H</span>
                <span className={styles.l_2}>O</span>
                <span className={styles.l_3}>M</span>
                <span className={styles.l_4}>E</span>
            </span>
        </div>
    );
}
export default ButtonMenu;