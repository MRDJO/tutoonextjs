'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link>
      <Link href="/cv">Cv</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/jeu">Jeu</Link>
    </main>
  );
}
