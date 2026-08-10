import Link from 'next/link';

export default function VwPage() {
  return <div>Mateus
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Volkswagen_logo.png" alt="" />
    <Link href="vw/jetta">Pagina Jetta</Link>
    <Link href="vw/golf">Pagina Golf</Link>
  </div>
}