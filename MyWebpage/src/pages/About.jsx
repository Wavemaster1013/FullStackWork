import styles from './About.module.css'

function About(){
    return(
        <main>
            <section className={styles.hero}>
                <h1 className={styles.title}>Who is Kwandingcebo Sithole</h1>
                <h3 className={styles.titleSub}>
                    A Campus Evangelist ready to find the Lost, <br /> 
                    A Computer Scienctist ready to Solve Problems, <br /> 
                    A Student Leader ready to make an impact.
                </h3>
            </section>
        </main>

    )
}

export default About