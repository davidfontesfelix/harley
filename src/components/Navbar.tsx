import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-primary min-w-screen h-14 flex items-center justify-between border-b px-52">
      <div className="flex items-center gap-2">
        <Image
          width={48}
          height={48}
          src={'/icons/logo.svg'}
          alt="ícone da Harley-Davidson"
        />
        <h2 className="text-3xl uppercase font-bold">Harley</h2>
      </div>
      <div>
        <ul className="flex gap-6 text-2xl font-bold uppercase">
          <li>
            <a href="#">início</a>
          </li>
          <li className="text-tertiary">
            <a href="#">comprar</a>
          </li>
          <li>
            <a href="#">detalhes</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
