import styles from './Home.module.css'
import ProfilePic from '../assets/profilePic.jpg'
import { Link } from 'react-router-dom'

const features = [
    {id: 1, title: 'Who Am I', desc: 'Read my Story', link: '/About'},
    {id: 2, title: 'What do I do', desc: 'Check out my Projects', link: '/Projects'},
    {id: 3, title: 'How to find me', desc: 'Here are my details', link: '/Contact'},
]

function Home(){
    return(
        <main>
            <section className ={ styles . hero}>
                <img className ={styles.profilePic} src={ProfilePic} alt="Picture of Kwandingcebo"/>
                <h1 className ={ styles . heroTitle}>
                    Hi, Im
                </h1>
                <h1 className ={ styles.nameTitle}>
                    Kwandingcebo Sithole
                </h1>
                <h4 className ={styles.heroSub}></h4>
                <h4 className ={styles . heroSub}>An Innovator, World changer and a man of the FUTURE</h4>

                {features.map(f => (
                    <Link to={f.link} key={f.id} className={styles.featureCard}>
                        <h2 className={styles.accent2}>{f.title}</h2>
                        <p>{f.desc}</p>
  </Link>
))}

            </section>

            <section className ={ styles . features}>
                
            </section>
        </main>
    )
}

export default Home