import { VIcon, VintedIcon } from '@assets/icons'
import BurgerBtn from '@components/common/BurgerBtn'
import Searchbar from '@components/common/SearchBar'

export const Header = () => {
  return <>
    <header className="w-full h-[52px] px-2 lg:px-5 py-1 flex border-b-[1px] border-[#ededed] items-center justify-between">
      <div id='brand-icon' className='lg:min-w-[200px]'>
        <VintedIcon className='text-[44px] hidden lg:block' />
        <VIcon className='lg:hidden' />
      </div>
      <div id='search-bar' className='hidden lg:block lg:min-w-[500px]'>
        <Searchbar />
      </div>
      <div id='header-right-content' className='lg:min-w-[200px]'>
        <div id='menu-toggle-btn' className='lg:hidden'>
          <BurgerBtn />
        </div>
      </div>
    </header>
    <div className='lg:hidden p-2'>
      <Searchbar />
    </div>
  </>
}
