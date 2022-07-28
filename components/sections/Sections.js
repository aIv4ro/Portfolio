import styles from './Sections.module.css'
import { Home } from '../home/Home'
import { Footer } from '../footer/Footer'
import { Projects } from '../projects/Projects'

export function Sections() {
	return (
		<div className={styles.sections}>
      <Home />
      <Projects />
		</div>
	)
}