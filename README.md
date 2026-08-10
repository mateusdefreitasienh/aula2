# Projeto Next.js

## Instalação

```cmd
npm create-next-app@latest
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Criando novas paginas
- Criar uma nova pastra dentro do `app`, com o nome da url (ex: astra)
- Criar um arquivo `page.tsx` dentro da pasta criada
- Acessar `/astra`

- É possível criar pastra dentro de pasta, ex `app/vw/golf/page.tsx`

## Link entre paginas (href)
- Assim é feito uma pré-renderizacao da pagina antes de abrir, ficando muito mais rápido
```typescript
import Link from 'next/link';

export default function HomePage() {
  return <div>Mateus
    
    <Link href="/astra">Pagina Astra</Link> 
  </div>
}
```