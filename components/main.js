import styles from '../styles/Main.module.css'
import Image from 'next/image'

export function Main() {
	return (
		<main className={styles.main}>
			<section className={styles.home_section} id="home">
				<div className={styles.home_section_description}>
					<p>
						¡Hola! 
					</p>
					<p>
						Soy Álvaro Martínez
					</p>
					<p>
						Android Developer
					</p>
				</div>
				<div className={styles.image_container}>
					<Image alt="alvaro martinez gutierrez" src="/alvaro.jpg" width="300px" height="300px" />
				</div>
			</section>
			<div className={styles.box} id="about"/>
			<div className={styles.box} id="projects"/>
			<div className={styles.box} id="contact"/>
		</main>
	)
}