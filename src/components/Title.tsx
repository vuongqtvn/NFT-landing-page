import React, { PropsWithChildren } from 'react'

export function Title({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl md:text-[32px] md:leading-[48px] text-primary font-black italic">
      {children}
    </h2>
  )
}
