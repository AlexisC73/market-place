import { VintedIcon } from '@assets/icons'
import Searchbar from '@components/common/SearchBar'

export const Header = () => {
  return <>
    <header className="w-full h-[52px] py-1 flex border-b-[1px] border-[#ededed] items-center">
      <VintedIcon className='text-[44px]' />
      <div className='hidden lg:block'>
        <Searchbar />
      </div>
    </header>
    <div className='lg:hidden p-2'>
      <Searchbar />
    </div>
  </>
}
