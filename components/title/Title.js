import styles from './Title.module.css'

export function Title({title = ""} = {}) {
  return (<h2 className={styles.title}>{title}</h2>)
}