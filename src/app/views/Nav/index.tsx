'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav() {
  const [activated, setActive] = useState<false | true>(false)
  return (
    <>
      <nav
        className={`shadow-lg w-full h-14 smartphone:h-20 flex items-center justify-around`}
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            width={48}
            height={48}
            alt="logo harley-davidson"
            src="assets/logo.svg"
          />
          <h1 className="uppercase text-3xl font-bold">harley</h1>
        </div>
        <ul className="flex gap-4 smartphone:hidden">
          <li>
            <a className="uppercase font-semibold text-xl hover:text-third transition-colors cursor-pointer">
              início
            </a>
          </li>
          <li>
            <a className="uppercase font-semibold text-xl hover:text-third transition-colors cursor-pointer">
              comprar
            </a>
          </li>
          <li>
            <a className="uppercase font-semibold text-xl hover:text-third transition-colors cursor-pointer">
              detalhes
            </a>
          </li>
          <li>
            <a className="uppercase font-semibold text-xl hover:text-third transition-colors cursor-pointer">
              contato
            </a>
          </li>
        </ul>
        <button
          onClick={() => setActive(!activated)}
          className="hidden smartphone:flex shadow-md w-14 h-14 border-[2px] border-black rounded-md justify-center items-center flex-col"
        >
          {activated ? (
            <>
              <div className="w-8 h-[2px] bg-black absolute transition-transform rotate-[135deg] delay-500 ease-linear" />
              <div className="w-8 h-[2px] bg-black absolute transition-transform rotate-45 delay-[800ms] ease-linear" />
              <div className="w-8 h-[2px] rotate-45 delay-1000 bg-black absolute transition-transform ease-linear" />
            </>
          ) : (
            <>
              <div className="w-8 h-[2px] bg-black mb-2" />
              <div className="w-8 h-[2px] bg-black" />
              <div className="w-8 h-[2px] bg-black mt-2" />
            </>
          )}
        </button>
      </nav>
      <div
        className={`w-full h-0 bg-white shadow-lg flex justify-center transition-all ${
          activated && 'h-72'
        }`}
      >
        {activated && (
          <ul className="flex flex-col gap-2 first:text-5xl justify-center items-center">
            <li>
              <a className="uppercase font-semibold text-2xl hover:text-third transition-colors cursor-pointer">
                início
              </a>
            </li>
            <li>
              <a className="uppercase font-semibold text-2xl hover:text-third transition-colors cursor-pointer">
                comprar
              </a>
            </li>
            <li>
              <a className="uppercase font-semibold text-2xl hover:text-third transition-colors cursor-pointer">
                detalhes
              </a>
            </li>
            <li>
              <a className="uppercase font-semibold text-2xl hover:text-third transition-colors cursor-pointer">
                contato
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  )
}
