import styles from './style.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={styles.container}>
      <Image src={'/heroBackground.jpg'} alt='background' width={10} height={10}/>
    </div>
  )
}
