import { type PropsWithChildren } from 'react'

export const IconBtn = ({ children }: PropsWithChildren) => {
  return (
  <button className='w-[44px] h-[46px] rounded-[4px] flex items-center justify-center hover:bg-[#fafcfc]'>
    {children}
  </button>
  )
}
