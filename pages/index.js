import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Home.module.css'
import yo from '../public/assets/image/fotoyo.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header className={ styles.header} >
          <Image src={yo} alt="yo" width={100} height={100} className={styles.image} />
          <p>Desallorador front end</p>
          <div className={ styles.contact }>
            <FontAwesomeIcon icon={faGithub} color="green" />
            <FontAwesomeIcon icon={faLinkedin}  />
            <FontAwesomeIcon icon={faEnvelope}  />
          </div>
        </header>

      
    </div>
  )
}
