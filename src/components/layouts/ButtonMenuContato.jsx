import styles from '../CSS/ButtonMenuContato.module.css';

function ButtonMenuContato ({onClick}){
    return (
        <div 
            className={styles.container}
        >
            <span 
                className={styles.content}
                onClick={()=> {onClick('/contact')}}
            >
                <span className={styles.l_1}>C</span>
                <span className={styles.l_2}>O</span>
                <span className={styles.l_3}>N</span>
                <span className={styles.l_4}>T</span>
                <span className={styles.l_5}>A</span>
                <span className={styles.l_6}>T</span>
                <span className={styles.l_7}>O</span>
            </span>
        </div>
    );
}
export default ButtonMenuContato;