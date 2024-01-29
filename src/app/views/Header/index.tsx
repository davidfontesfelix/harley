import Colors from './Colors'
import Info from './Info'

export default function Header() {
  return (
    <header className="w-full desktop:h-[115vh] tablet:h-[80vh] ">
      <div className="flex items-center flex-col mt-36 relative">
        <div className="text-center">
          <h3 className="text-3xl font-medium smartphone:text-lg">
            NOVA HARLEY-DAVIDSON CHEGA AO BRASIL
          </h3>
          <h2 className="text-9xl font-bold tablet:text-8xl smartphone:text-5xl">
            SPORTSTER S
          </h2>
        </div>
        <Colors />

        <Info
          nameInfo="CILINDRADAS:"
          info="1.252 cm³"
          className="top-72 ml-36 hidden desktop:flex"
        />
        <Info
          nameInfo="PNEU :"
          info="Pneus Dunlop™"
          className="top-[470px] -ml-[520px] hidden desktop:flex"
        />
      </div>
    </header>
  )
}
