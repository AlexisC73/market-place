import { QuestionIcon, VintedIcon } from '@assets/icons'
import IconBtn from '@components/common/IconBtn'
import LangageSelect from '@components/common/LangageSelect'
import Searchbar from '@components/common/SearchBar'
import SignButtons from './SignButtons'
import { useState } from 'react'
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => { setMenuOpen(prev => !prev) }

  return <>
    <header className="w-full z-10">
      <div id='nav-header' className='border-b-[1px] border-[#ededed]'>
        <div className='header-content h-[52px] lg:px-5 w-full flex lg:max-w-[1280px] px-2 mx-auto items-center justify-between'>
          <div id='brand-icon'>
            <VintedIcon className='text-[44px]' />
          </div>
          <div id='search-bar' className='hidden lg:block flex-1 px-16'>
            <Searchbar />
          </div>
          <div id='header-right-content' className='lg:min-w-[200px] flex items-center'>
            <div id='"desktop-content' className='items-center hidden lg:flex gap-x-1'>
              <SignButtons />
              <IconBtn>
                <QuestionIcon className='text-[24px] text-[#969898]' />
              </IconBtn>
              <LangageSelect />
            </div>
            <div id='mobile-content' className='lg:hidden'>
              <MobileMenuButton menuOpen={menuOpen} onClick={handleToggleMenu} />
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div id='header-menu-mobile' className='fixed lg:hidden top-[53px] z-10 inset-0 w-full'>
          <MobileMenu />
        </div>
      )}
    </header>
    <div className='lg:hidden p-2'>
      <Searchbar />
    </div>
  </>
}
