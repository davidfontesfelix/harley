import Image from 'next/image'

export default function Card() {
  return (
    <div className="mt-12 relative">
      <Image
        width={200}
        height={300}
        className="h-[80vh] w-[25vw]"
        alt=""
        src="/assets/escapamento.png"
      />
      <div
        className="w-full h-[38vh] absolute bottom-0"
        style={{
          background:
            'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.79) 44.75%, rgba(0, 0, 0, 0.67) 71.88%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.79) 44.75%, rgba(0, 0, 0, 0.67) 71.88%, rgba(0, 0, 0, 0.00) 100%);',
        }}
      >
        <h3 className="text-white text-4xl pt-24">ESCAPAMENTO ELEVADO</h3>
        <p className="text-white/80 text-2xl w-full">
          Inspirados nos dias de glória da H-D nos circuitos de flat-track, os
          canos são feitos de aço inoxidável Série 304 resistentes à corrosão,
          desenvolvidos para desviar o calor do escapamento das pernas do
          motociclista e da cauda da motocicleta.
        </p>
      </div>
    </div>
  )
}
