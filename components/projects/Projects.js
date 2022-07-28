import styles from './Projects.module.css'
import { Title } from '../title/Title'
import { Project } from '../project/Project'

const projects = [
  {image: "/conways-game.png", repository: "https://github.com/AlvaroG2", title: "Conway's game", description: "Se trata de un autómata celular cuyo algoritmo fue diseñado por John Conway"},
  {image: "/deliicious.png", repository: "https://github.com/ModuloInterLunar", title: "Deliicious", description: "Una TPV creada durante mi curso de DAM junto a tres compañeros. Cuenta con una API Rest, una aplicación android hecha en JetpackCompose y una aplicación de escritorio hecha en .Net"},
]

export function Projects() {
  return (
    <section id="projects" className={styles.projects_section}>
      <Title title="Proyectos" />
      <div className={styles.projects_container}>
        {
          projects.map(project => {
            const {title, description, image, repository} = project
            return <Project key={title} repository={repository} image={image} title={title} description={description} />
          })
        }
      </div>
    </section>
  )
}