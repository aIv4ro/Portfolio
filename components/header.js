import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { useState } from 'react';

const navItems = [
	{name: "Home", id: "home"}, 
	{name: "About", id: "about"}, 
	{name: "Projects", id: "projects"},
	{name: "Contact", id: "contact"}
]

export function Header() {
  const [menuClosed, setMenuClosed] = useState(true);

	console.log(menuClosed)

	return (
		<header className={styles.header}>
			<div className={styles.image_wrapper}>
				<Image
					src="/favicon.ico"
					alt="Picture of the author"
					width="30px"
					height="30px"
				/>
			</div>	

			<div className={styles.hamburguer} onClick={() => setMenuClosed(!menuClosed)}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<nav className={`${styles.nav} ${menuClosed ? styles.menu_closed : ''}`}>
				<ul className={styles.nav_list}>
					{
						navItems.map(navItem => {
							return (
								<li className={styles.nav_item} key={navItem.id}>
									<a href={`#${navItem.id}`}>
										{navItem.name}
									</a>
								</li>
							)
						})
					}
				</ul>
			</nav>
		</header>
	)
}
