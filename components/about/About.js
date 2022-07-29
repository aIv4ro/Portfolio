import { Title } from '../title/Title'
import styles from './About.module.css'

const skills = [
  {},
  {},
  {}
]

export function About() {
  return (
    <section id="about" className={styles.about}>
      <Title title="Sobre mi" />
      <div className={styles.about_content}>
        <p>
          Soy Álvaro Martínez Gutiérrez, un alumno recién graduado en el grado superior de Desarrollo de Aplicaciones Multiplataforma.
        </p>
        <p>
          Durante el curso he adquirido conocimientos para el desarrollo frontend y backend.
          <br />
          Por la parte frontend he aprendido a desarrollar aplicaciones con Android Views, 
          Jetpack Compose y Flutter, y por la parte backend he aprendido a desarrollar servidores 
          con Express. 
        </p>
        <p>
          Me considero una persona con facilidad para el aprendizaje y con ganas de
          seguir mejorando en las tecnologías que ya conozco y de aprender algunas nuevas.
        </p>
      </div>
    </section>
  )
}