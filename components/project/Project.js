import styles from './Project.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export function Project({ image, title = "no title", description = "no description" } = {}) {
  return (
    <div className={styles.project_container}>
      <Link href="https://github.com/AlvaroG2" target="_blank">
        <a>
          <div className={styles.project_header}>
            <p>{title}</p>
            <FontAwesomeIcon className={styles.github_link} icon={faGithub} width="40px" height="40px" />
          </div>
          <div className={styles.project_image} />
          <div className={styles.project_description}> 
            {description}
          </div>
        </a>
      </Link>
    </div>
  )
}