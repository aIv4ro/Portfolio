import { Title } from '../title/Title'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className={styles.about}>
      <Title title="Sobre mi" />
      <div className={styles.about_content}>
        <p>
          Soy Álvaro Martínez Gutiérrez, un alumno recién graduado en Desarrollo de Aplicaciones Multiplataforma de Benidorm, España
        </p>
        <p>
          Durante el curso he adquirido conocimientos para el desarrollo frontend y backend.
          <br />
          Por la parte frontend he aprendido a desarrollar aplicaciones con Jetpack Compose 
          y Flutter, y por la parte backend he aprendido a desarrollar servidores con Express.
          <br />
          Además, por mi cuenta he ido aprendiendo algunas tecnologías web como React. 
        </p>
        <p>
          Me considero una persona con facilidad para el aprendizaje y con ganas de
          seguir mejorando en las tecnologías que ya conozco y de aprender nuevas. 
        </p>
        <p>
          Por último, decir que, aunque tenga más experiencia desarrollando aplicaciones Android, también estoy
          muy interesado en el desarrollo backend.
        </p>
      </div>
    </section>
  )
}