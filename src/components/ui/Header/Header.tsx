import { BurgerMenuIcon, QuestionIcon, VIcon, VintedIcon } from '@assets/icons'
import Button from '@components/common/Button'
import IconBtn from '@components/common/IconBtn'
import LangageSelect from '@components/common/LangageSelect'
import Searchbar from '@components/common/SearchBar'

export const Header = () => {
  return <>
    <header className="w-full h-[52px] px-2 lg:px-5 py-1 flex border-b-[1px] border-[#ededed] items-center justify-between">
      <div className='header-content w-full flex lg:max-w-[1280px] mx-auto items-center justify-between'>
        <div id='brand-icon'>
          <VintedIcon className='text-[44px] hidden lg:block' />
          <VIcon className='lg:hidden' />
        </div>
        <div id='search-bar' className='hidden lg:block flex-1 px-16'>
          <Searchbar />
        </div>
        <div id='header-right-content' className='lg:min-w-[200px] flex items-center'>
          <div id='"desktop-content' className='items-center hidden lg:flex gap-x-1'>
            <div className='gap-x-2 flex'>
              <Button type='secondary'>S'inscrire | Se connecter</Button>
              <Button>Vends tes articles</Button>
            </div>
            <IconBtn>
              <QuestionIcon className='text-[24px] text-[#969898]' />
            </IconBtn>
            <LangageSelect />
          </div>
          <div id='menu-toggle-btn' className='lg:hidden'>
            <IconBtn>
              <BurgerMenuIcon className='text-[24px]' />
            </IconBtn>
          </div>
        </div>
      </div>

    </header>
    <div className='lg:hidden p-2'>
      <Searchbar />
    </div>
  </>
}
