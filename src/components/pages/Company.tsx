import styles from '../CSS/Company.module.css';
import foto01 from '../imgs/Fotos/galeriaHome/foto01.jpg';
import foto02 from '../imgs/Fotos/galeriaHome/foto02.jpg';
import foto03 from '../imgs/Fotos/galeriaHome/foto03.jpg';

function Company(){
    return(
        <section className={styles.company_container}>
            <h1>Quem é a Radical BR</h1>
            <div className={styles.modal}>
                <div className={styles.modal_caixa}>
                    <h2>Nossa missão</h2>
                    <div className={styles.modal_label}>
                        <label>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum."
                        </label>
                    </div>                    
                </div>
                <div className={styles.modal_caixa}>
                    <h2>Nossa visão</h2>
                    <div className={styles.modal_label}>
                        <label>
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate."
                        </label>
                    </div>                    
                </div>
                <div className={styles.modal_caixa}>
                    <h2>Nossos valores</h2>
                    <div className={styles.modal_label}>
                        <label>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                        </label>
                    </div>                    
                </div>  
            </div>

            <div className={styles.modal_rapel} id='rapel'>
                <h2><span>Rapel</span></h2>
                <div className={styles.caixa_rapel}>
                    <img 
                        src={foto01} 
                        alt="RadicalBR" 
                        className={styles.img_rapel}
                    />
                    <div className={styles.txt_rapel}>
                        <label>
                            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire"
                        </label>
                    </div>
                </div>                
            </div>
            <div className={styles.modal_rapel} id='remada'>
                <h2><span>Remada</span></h2>
                <div className={styles.caixa_rapel}>
                    <img 
                        src={foto02} 
                        alt="RadicalBR" 
                        className={styles.img_rapel}
                    />
                    <div className={styles.txt_rapel}>
                        <label>
                            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire"
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.modal_rapel} id='rafting'>
                <h2><span>Rafting</span></h2>
                <div className={styles.caixa_rapel}>
                    <img 
                        src={foto03} 
                        alt="RadicalBR" 
                        className={styles.img_rapel}
                    />
                    <div className={styles.txt_rapel}>
                        <label>
                            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire"
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Company;