import styles from './Project.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export function Project({ image = "", repository = "", title = "no title", description = "no description" } = {}) {
  return (
    <div className={styles.project_container}>
      <div className={styles.project_header}>
        <p>{title}</p>
        <Link href={repository}>
          <a target="_blank">
            <FontAwesomeIcon className={styles.github_link} icon={faGithub} size="2x" />
          </a>
        </Link>
      </div>
      <Link href={repository}>
        <a className={styles.project_link} target="_blank">
          <div className={styles.project_image} style={{backgroundImage: `url('${image}')`}} />
          <div className={styles.project_description}> 
            {description}
          </div>
        </a>
      </Link>
    </div>
  )
}