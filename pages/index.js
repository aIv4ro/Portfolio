import { Header } from '../components/header/Header'
import { Sections } from '../components/sections/Sections'
import { Footer } from '../components/footer/Footer'
import styles from '../styles/Home.module.css'
import { Fab } from '../components/fab/Fab'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head><title>Portfolio Álvaro</title></Head>
      <Header />
      <Sections />
      <Fab />
      <Footer />
    </div>
  )
}
