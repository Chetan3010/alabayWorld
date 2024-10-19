import React from 'react'
import styles from './styles.module.css'

const Tokenomics = () => {
  return (
    <div className={styles.tokenomics}>
        <h1 className={styles.tokenomicsTitle}>TOKENOMICS</h1>
        <div className={styles.tokenomicsWrapper}>
            <div className={styles.tokenomicsContent}>
                <div>
                    <span>LIQUIDITY</span>
                    <h1>LOCKED</h1>
                </div>
                <div>
                    <span>CONTRACT</span>
                    <h1>RENOUNCED</h1>
                </div>
                <div>
                    <span>RENOUNCED</span>
                    <h1>0%</h1>
                </div>
            </div>
            <div className={styles.tokenomicsMedia}>
                <img src="/images/cashier-dog.png" alt="CASHIER DOG"/>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Tokenomics