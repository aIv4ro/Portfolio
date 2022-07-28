import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import styles from './Fab.module.css'
import Link from 'next/link'

export function Fab() {
  return (
    <div className={styles.fab_container}>
      <Link href="#header">
        <a>
          <FontAwesomeIcon icon={faAngleUp} size="3x" />
        </a>
      </Link>
    </div>
  )
}