import Link from 'next/link';
import Cabecalho from './cabecalho';
import Rodape from './rodape';

export default function HomePage() {
  return <div>
    <Cabecalho/>

    Mateus
    <br />
    <Link href="/vw">Pagina VW</Link>
    <br />
    <Link href="/astra">Pagina Astra</Link>
    <Rodape/>
  </div>
}