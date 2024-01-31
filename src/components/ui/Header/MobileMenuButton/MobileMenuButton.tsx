import { BurgerMenuIcon, CrossIcon } from '@assets/icons'
import IconBtn from '@components/common/IconBtn'

export const MobileMenuButton = ({ menuOpen, onClick }: { menuOpen: boolean, onClick: () => void }) => {
  return (<IconBtn onClick={onClick}>
    {!menuOpen && <BurgerMenuIcon className='text-[24px] text-[#757575]' />}
    {menuOpen && <CrossIcon className='text-[24px] text-[#757575]' />}
  </IconBtn>)
}
