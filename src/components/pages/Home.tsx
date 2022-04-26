import styles from '../CSS/Home.module.css';
import AnimationFotosHome from "../Animations/AnimationFotosHome";

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Radical BR</h1>
            <AnimationFotosHome />
        </section>
    )
}
export default Home;