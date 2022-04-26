import styles from '../CSS/Container.module.css'

function Container({children, customClass, name}){
    return(
        <div className={`${styles.container} ${styles[customClass]}`} name={name}>
            {children}
        </div>
    )
}
export default Container;