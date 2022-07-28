import styles from './Header.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export function Header() {
  const [menuClosed, setMenuClosed] = useState(true);

  const navItems = [
    {name: "Inicio", id: "home"}, 
    {name: "Sobre mi", id: "about"}, 
    {name: "Proyectos", id: "projects"},
    {name: "Contacto", id: "contact"}
  ]

	return (
		<header className={styles.header} id="header" >
      <div className={styles.image_wrapper}>
        <Image
          src="/favicon.ico"
          alt="Picture of the author"
          width="30px"
          height="30px"
        />
      </div>	

      <div className={styles.hamburguer_container} onClick={() => setMenuClosed(!menuClosed)}>
        <FontAwesomeIcon icon={menuClosed ? faBars : faClose} size="lg"/>
      </div>

      <nav className={`${styles.nav} ${menuClosed ? styles.menu_closed : ''}`}>
        <ul className={styles.nav_list}>
          {
            navItems.map(navItem => {
              return (
                <li className={styles.nav_item} key={navItem.id}>
                  <Link href={`#${navItem.id}`} >
                    <a>
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
