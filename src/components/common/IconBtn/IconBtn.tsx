import { type PropsWithChildren } from 'react'

export const IconBtn = ({ children, onClick }: PropsWithChildren & { onClick?: () => void }) => {
  return (
  <button onClick={onClick} className='w-[44px] h-[46px] rounded-[4px] flex items-center justify-center hover:bg-[#fafcfc]'>
    {children}
  </button>
  )
}
