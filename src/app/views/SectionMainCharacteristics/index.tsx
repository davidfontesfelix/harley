import Card from './Card'

export default function SectionMainCharacteristics() {
  return (
    <section className="h-full w-full bg-black pt-14 flex  flex-col items-center">
      <h2 className="text-white font-bold text-5xl tablet:text-4xl smartphone:text-3xl text-center">
        Principais características
      </h2>
      <div className="flex gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
