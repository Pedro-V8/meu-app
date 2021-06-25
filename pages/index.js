import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import React, { useState } from 'react'


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
  const [ indice , setIndice ] = useState(0)
  let results = data
  console.log(results)

  function aumentaIndice(){
    if(indice === results.length){
      setIndice(0)
    }else{
      console.log(indice)
      setIndice(indice + 1)
    }

    console.log(indice)
  }

  function diminuiIndice(){
    if(indice < 0){
      setIndice(0)
    }else{
      setIndice(indice - 1)
    }

    console.log(indice)
  }

  
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
          <div className={styles.option} onClick={diminuiIndice}>
            <img className={styles.esquerda} src="/sEsquerda.png"/>
          </div>

          <button className={styles.botao} onClick={aumentaIndice}>CLICK ME</button>


          <div className={styles.option}>
            <img className={styles.direita} src="/sDireita.png"/>
          </div>


        </div>

        <img src={ results[0].url } className={styles.image}/>

      </main>
    </div>
  )
}









