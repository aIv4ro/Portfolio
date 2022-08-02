import styles from './Header.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export function Header() {
  const [menuClosed, setMenuClosed] = useState(true);

  const navItems = [
    {name: "Inicio", id: "home", link: "#home"}, 
    {name: "Sobre mi", id: "about", link: "#about"}, 
    {name: "Proyectos", id: "projects", link: "#projects"},
    {name: "CV", id: "cv", link: "/cv.pdf"},
  ]

	return (
		<header className={styles.header} id="header" >
      <p>alvaro</p>

      <div className={styles.hamburguer_container} onClick={() => setMenuClosed(!menuClosed)}>
        <FontAwesomeIcon icon={menuClosed ? faBars : faClose} size="lg"/>
      </div>

      <nav className={`${styles.nav} ${menuClosed ? styles.menu_closed : ''}`}>
        <ul className={styles.nav_list}>
          {
            navItems.map(navItem => {
              const target = navItem.id == 'cv' ? '_blank' : "_self"

              return (
                <li className={styles.nav_item} key={navItem.id}>
                  <Link href={navItem.link}>
                    <a target={target}>
                      {navItem.name}
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
		</header>
	)
}
