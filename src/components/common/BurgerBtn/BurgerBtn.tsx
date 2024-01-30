import { BurgerMenuIcon } from '@assets/icons'

export const BurgerBtn = () => {
  return (
  <button className='px-[10px] h-[46px] rounded-[4px] flex items-center hover:bg-[#fafcfc]'>
    <BurgerMenuIcon className='text-[24px]' />
  </button>
  )
}
