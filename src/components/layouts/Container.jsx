import styles from '../CSS/Container.module.css'

function Container({children, customClass, name}){
    return(
        <div name={name} className={styles.containerBack}>
            <div className={`${styles.container} ${styles[customClass]}`}>
                {children}
            </div>
        </div>
    )
}
export default Container;