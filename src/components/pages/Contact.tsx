import styles from '../CSS/Contact.module.css';

function Contact(){
    return(
        <section className={styles.contact_container}>
            <h1>Fale com a gente!</h1>
            <form action="https://formsubmit.co/3f4a29478080de18b400a6587c37ad75" method="POST">
                <input 
                    type="text" 
                    name="name" 
                    placeholder='digite seu nome...'
                    required />
                <input 
                    type="email" 
                    name="email" 
                    placeholder='digite seu e-mail...'
                    required />
                <textarea 
                    name='msg'
                    placeholder='digite sua mensagem...'
                >

                </textarea>
                <input type="hidden" name="_next" value={`${process.env.REACT_APP_httpsProduct}`}/>
                <button type="submit">Enviar</button>
            </form> 
        </section>
    )
}
export default Contact;