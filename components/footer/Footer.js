import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import styles from './Footer.module.css'

export function Footer() {
  const onEmailClick = () => window.open('mailto:alvaromagu2002@gmail.com')

  return (
    <footer className={styles.footer}>
      <div className={styles.contact_links}>
        <FontAwesomeIcon icon={faEnvelope} size="2x" onClick={onEmailClick} />
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
      <p className={styles.location}>Benidorm, Espa&ntilde;a</p>
    </footer>
  )
}