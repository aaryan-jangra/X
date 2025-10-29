import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head><title>Next.js Starter</title></Head>
      <main style={{padding:'2rem', fontFamily:'system-ui, Arial'}}>
        <h1>Next.js Starter</h1>
        <p>This is the index page.</p>
        <p><Link href="/about">About</Link></p>
      </main>
    </>
  )
}
