import styles from './Sections.module.css'
import { Home } from '../home/Home'
import { Footer } from '../footer/Footer'
import { Projects } from '../projects/Projects'
import { About } from '../about/About'

export function Sections() {
	return (
		<div className={styles.sections}>
      <Home />
      <About />
      <Projects />
		</div>
	)
}