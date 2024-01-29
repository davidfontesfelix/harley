import Header from './views/Header'
import Nav from './views/Nav'
import SectionMainCharacteristics from './views/SectionMainCharacteristics'

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <Nav />
      <Header />
      <SectionMainCharacteristics />
    </main>
  )
}
