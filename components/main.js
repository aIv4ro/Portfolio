import styles from '../styles/Main.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Title } from './title/Title'
import { Project } from './project/Project'

const projects = [
  {image: "/conways-game.png", repository: "https://github.com/AlvaroG2", title: "Conway's game", description: "Se trata de un autómata celular cuyo algoritmo fue diseñado por John Conway"},
  {image: "/deliicious.png", repository: "https://github.com/ModuloInterLunar", title: "Deliicious", description: "Una TPV creada durante mi curso de DAM junto a tres compañeros. Cuenta con una API Rest, una aplicación android hecha en JetpackCompose y una aplicación de escritorio hecha en .Net"},
]

export function Main() {
	return (
		<main className={styles.main}>
			<section id="home" className={styles.home_section}>
        <div className={styles.home_section_content}>
          <div className={styles.home_section_description}>
            <p>
              ¡Hola! 
            </p>
            <p>
              Soy Álvaro Martínez,
            </p>
            <p>
              Android Developer
            </p>
          </div>
          <div className={styles.home_section_other_info}>
            <div className={styles.image_container}>
              <Image alt="alvaro martinez gutierrez" src="/alvaro.jpg" width="250px" height="250px" />
            </div>
            <div className={styles.links_container}>
              <Link href="https://github.com/AlvaroG2">
                <a><FontAwesomeIcon icon={faGithub} width="40px" height="40px" /></a>
              </Link>
              <Link href="https://github.com/AlvaroG2">
                <a><FontAwesomeIcon icon={faLinkedin} width="40px" height="40px" /></a>
              </Link>
            </div>
          </div>
        </div>
			</section>

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
			<div className={styles.box} id="contact"/>
		</main>
	)
}