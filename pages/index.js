import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import React from 'react'


export async function getServerSideProps() {
  const response = await fetch('https://wa-images-backend.herokuapp.com/imagens') 
  const data = await response.json()  
  return {
    props: {
      data
    }
  }
}


export default function Home({ data }) {
  let results = data
  console.log(results)
  return (
    <div className={styles.container}>
      <Head>
        <title>Waifu Pics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Teste Waifu
        </h1>

        <div className={styles.manager}>
          <div className={styles.option}>
            <img className={styles.esquerda} src="/sEsquerda.png"/>
          </div>

          <button className={styles.botao}>CLICK ME</button>


          <div className={styles.option}>
            <img className={styles.direita} src="/sDireita.png"/>
          </div>


        </div>

        <img src={ results[0].url } className={styles.image}/>

      </main>
    </div>
  )
}









