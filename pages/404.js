import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function FourOhFour() {
  return <div className={styles.container}>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </div>
}