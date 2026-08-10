import Link from 'next/link';

export default function HomePage() {
  return <div>Mateus
    <br />
    <Link href="/vw">Pagina VW</Link>
    <br />
    <Link href="/astra">Pagina Astra</Link>
  </div>
}