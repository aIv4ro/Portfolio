import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const [menuClosed, setMenuClosed] = useState(true);

  const navItems = [
    {name: "Home", id: "home"}, 
    {name: "About", id: "about"}, 
    {name: "Projects", id: "projects"},
    {name: "Contact", id: "contact"}
  ]

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

      <div className={styles.hamburguer_container} onClick={() => setMenuClosed(!menuClosed)}>
        <FontAwesomeIcon icon={menuClosed ? faBars : faClose} size="lg"/>
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
