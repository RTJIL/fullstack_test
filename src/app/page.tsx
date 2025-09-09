import Image from 'next/image'
import styles from './page.module.css'

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import ProductBlocks from './components/product/ProductBlock'
import SwiperSection from './components/swiper/Swiper'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <ProductBlocks />
      <SwiperSection />
      <Footer />
    </div>
  )
}
