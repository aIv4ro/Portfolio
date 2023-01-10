import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import styles from './Home.module.css'

export function Home() {
  const onEmailClick = () => window.open('mailto:alvaromagu2002@gmail.com')

  return (
    <section id="home" className={styles.home_section}>
      <div className={styles.home_section_content}>
        <div className={styles.home_section_description}>
          <p>
            ¡Hola! 
          </p>
          <p>
            Soy Álvaro Martínez,
          </p>
          <p>
            Fullstack Developer
          </p>
        </div>
        <div className={styles.home_section_other_info}>
          <div className={styles.image_container}></div>
          <div className={styles.links_container}>
            <FontAwesomeIcon icon={faEnvelope} onClick={onEmailClick} size="2x" />
            <Link href="https://github.com/aIv4ro">
              <a target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADnez-guti%C3%A9rrez-a5835b247">
              <a target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}