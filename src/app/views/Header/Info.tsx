'use client'
import { useState } from 'react'

interface infoProps {
  nameInfo: string
  info: string
  className: string
}

export default function Info(props: infoProps) {
  const [activated, setActivated] = useState<true | false>(false)
  return (
    <div className={`${props.className} flex absolute z-20 w-72`}>
      <div
        onMouseOver={() => setActivated(true)}
        onMouseOut={() => setActivated(false)}
        className="w-20 h-20 bg-black/70 border-2 border-third"
      />
      {activated ? (
        <span className="bg-black/70 h-9 mt-2 w-52 border-t-2 border-third text-white flex justify-center items-center transition-transform">
          {props.nameInfo}
          <span className="ml-2">{props.info}</span>
        </span>
      ) : (
        <span className="bg-black/70 h-9 w-52 border-t-2 border-third text-white flex justify-center items-center opacity-0 -translate-x-6 transition-transform">
          CILINDRADAS : <span>1.252 cm³</span>
        </span>
      )}
    </div>
  )
}
