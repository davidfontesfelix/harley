'use client'
import { ReactNode, useState } from 'react'

interface InfoHeaderProps {
  children: ReactNode
  value: string
  className: string
}

export default function InfoHeader(props: InfoHeaderProps) {
  const [visible, setVisible] = useState<true | false>(false)
  return (
    <div className={`flex ${props.className} absolute`}>
      <div
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
        className="w-16 h-16 border-2 border-tertiary bg-secondary/60 "
      />
      <div
        className={`h-8 transition-all flex duration-500 text-left bg-secondary/90 border-t-2 px-2 ${
          visible === true ? 'w-full visible' : ' w-0 invisible opacity-0'
        } border-t-tertiary`}
      >
        <h3 className="text-primary uppercase font-medium">{props.children}</h3>
        <h4 className="text-primary ml-2">{props.value}</h4>
      </div>
    </div>
  )
}
