import React from 'react'
import styles from './styles.module.css'

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>WELCOME TO ALABAY WORLD</h1>
        <div className={styles.descWrapper}>
            <p className={styles.desc}>
                where the <span>legendary Central Asian Shepherd Dog</span> meets a new-age adventure.
                <br />
                <span>Join us</span> in celebrating the <span>strength, loyalty, and heritage</span> of the Alabay breed.
            </p>
        </div>
        <img src="/images/landing-page.png" alt="landing-page" />
    </div>
  )
}

export default LandingPage