import { Header } from '../components/header/Header'
import { Sections } from '../components/sections/Sections'
import { Footer } from '../components/footer/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Sections />
      <Footer />
    </div>
  )
}
