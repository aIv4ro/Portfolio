import styles from './Projects.module.css'
import { Title } from '../title/Title'
import { Project } from '../project/Project'

const projects = [
  {image: "/conways-game.png", web: "https://conways-game-alvaro.vercel.app/", repository: "https://github.com/aIv4ro/Conways-Game", title: "Conway's game", description: "Se trata de un autómata celular cuyo algoritmo fue diseñado por John Conway"},
  {image: "/snake.png", web: "https://snake-alvaro.vercel.app/",repository: "https://github.com/aIv4ro/snake", title: "Snake Game",},
  {image: "/deliicious.png", repository: "https://github.com/ModuloInterLunar", title: "Deliicious", description: "Una TPV creada durante mi curso de DAM junto a tres compañeros. Cuenta con una API Rest, una aplicación android hecha en JetpackCompose y una aplicación de escritorio hecha en .Net."},
  {image: "/padel.png", repository: "https://github.com/Alvaro-Final-Proyect", title: "Software de gestión deportiva", description: "Un software que se encarga de gestionar las instalaciones deportivas de un centro de pádel. Cuenta con una aplicación hecha en flutter y con una API Rest."},
]

export function Projects() {
  return (
    <section id="projects" className={styles.projects_section}>
      <Title title="Proyectos" />
      <div className={styles.projects_container}>
        {
          projects.map(project => {
            const {title, description, image, repository, web} = project
            return <Project key={title} repository={repository} image={image} title={title} description={description} web={web} />
          })
        }
      </div>
    </section>
  )
}