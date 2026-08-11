import Link from 'next/link';
import Cabecalho from './cabecalho';
import Rodape from '@/app/rodape'
import Title from '@/components/title';

export default function HomePage() {
  return <div>
    <Cabecalho/>
    <Title cor="red">Este é o titulo da home</Title>
    Mateus
    <br />
    <Link href="/vw">Pagina VW</Link>
    <br />
    <Link href="/astra">Pagina Astra</Link>
    <Rodape/>
  </div>
}