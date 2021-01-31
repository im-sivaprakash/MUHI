import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  //if user unauthenticated redirect to /login page
  //if user authenticated show the greeting page
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
