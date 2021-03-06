import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [datax, setData] = useState('')
  const getData = async () => {
    const { data } = await axios.get('/api/')
    console.log(data)
    setData(data.message)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <Fragment>
      <Head>
        <title>Atamurad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>data will</h1>
      <h2>{datax}</h2>
    </Fragment>
  )
}

export default Home
