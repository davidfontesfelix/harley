'use client'
import white from '../../../colors/branca.png'
import black from '../../../colors/preta.png'
import gray from '../../../colors/cinza.png'
import blue from '../../../colors/azul.png'
import Image from 'next/image'
import { useState } from 'react'

export default function Colors() {
  const [colorBike, setColorBike] = useState(black)

  function colorButton(color: string, set: any) {
    if (colorBike === set) {
      return (
        <li className="relative">
          <button
            onClick={() => setColorBike(set)}
            className={`${color} w-14 h-14 2 border-third rounded-full border-2`}
          ></button>
          <div className="absolute top-[12px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="50"
              viewBox="0 0 57 50"
              fill="none"
            >
              <path
                d="M56 25C56 38.1358 43.8149 49 28.5 49C13.1851 49 1 38.1358 1 25C1 11.8642 13.1851 1 28.5 1C43.8149 1 56 11.8642 56 25Z"
                stroke="url(#paint0_linear_21_22)"
                strokeWidth="2" // Corrigindo para camelCase
              />
              <defs>
                <linearGradient
                  id="paint0_linear_21_22"
                  x1="28.5"
                  y1="25"
                  x2="28.5"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.34375" stopColor="white" stopOpacity="0" />
                  <stop offset="0.364583" stopColor="#D26704" />
                  <stop offset="1" stopColor="#D26704" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </li>
      )
    }
    return (
      <li>
        <button
          onClick={() => setColorBike(set)}
          className={`${color} w-14 h-14 2 border-third rounded-full border-2`}
        ></button>
      </li>
    )
  }
  return (
    <div className="z-10 absolute top-20 flex flex-col items-center text-center">
      <Image
        width={960}
        height={560}
        alt="moto sportster s"
        className="w-[95%] h-[95%]"
        src={colorBike}
      />
      <div className="-mt-6">
        <h4 className="text-2xl font-medium">Opções de cores</h4>
        <ul className="flex gap-4 mt-8">
          {colorButton('bg-[#181818]', black)}
          {colorButton('bg-[#555352]', gray)}
          {colorButton('bg-[#E4DBD0]', white)}
          {colorButton('bg-[#005478]', blue)}
        </ul>
      </div>
    </div>
  )
}
