import Image from 'next/image'
import InfoHeader from './info-header'

export default function Header() {
  return (
    <header className="w-full h-screen bg-neutral-200 flex justify-center items-center">
      <div className="text-center">
        <div>
          <h2 className="text-4xl font-medium uppercase">
            Nova Haley-Davidson chega ao Brasil
          </h2>
          <h1 className="text-9xl uppercase font-bold">sportster s</h1>
        </div>
        <div className="-mt-20 relative">
          <InfoHeader className="ml-[480px] mt-[180px]" value="1.252cm³">
            cilindradas:
          </InfoHeader>
          <InfoHeader className="ml-[60px] mt-[320px]" value="Pneus Dunlop™">
            pneu:
          </InfoHeader>
          <Image
            width={800}
            height={400}
            src="/images/black.png"
            alt="harley preta"
          />
        </div>
      </div>
    </header>
  )
}
