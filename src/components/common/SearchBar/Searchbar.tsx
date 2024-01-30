import { ArrowDown, SearchIcon } from '@assets/icons'
import { useEffect, useRef, useState } from 'react'

const SEARCH_OPTIONS = [
  { id: 1, name: 'Articles', searchText: 'Rechercher des articles' },
  { id: 2, name: 'Membres', searchText: 'Rechercher des membres' },
  { id: 3, name: "Centre d'aide", searchText: 'Rechercher par mot-clé' }
]

export const Searchbar = () => {
  const [selected, setSelected] = useState(SEARCH_OPTIONS[0])

  const handleSelect = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setSelected(SEARCH_OPTIONS.find(option => option.id === id)!)
  }

  return <div className="h-9 bg-[#f2f2f2] w-full rounded-[4px] flex">
    <SearchSelect currentSelect={selected} onSelect={handleSelect} />
    <div className='flex gap-x-2 items-center px-3 w-full'>
      <SearchIcon className='text-[#999999] text-[1.1em]' />
      <input className='bg-transparent outline-none w-full' type='text' placeholder={selected.searchText} />
    </div>
  </div>
}

const SearchSelect = ({ currentSelect, onSelect }: { currentSelect: { id: number, name: string, searchText: string }, onSelect: (id: number) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleToggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const handleSelect = (id: number) => {
    onSelect(id)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current != null && !menuRef.current.contains(e.target as Node)) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return (
  <div ref={menuRef} className='select items-center flex border-[#e1e1e1] border-r-[1px] relative'>
    <button onClick={handleToggleMenu} className="flex px-3 rounded-[4px] gap-x-1 items-center hover:bg-[#efefef] text-[#757575] h-full flex-1">
      <span className='text-[14px] text-nowrap'>{currentSelect.name}</span>
      <ArrowDown className='text-[1rem]' />
    </button>
    {menuOpen && (
      <ul className='absolute top-11 bg-white w-[148px] rounded-[4px] border-[1px] border-[#efefef] flex flex-col text-[#4D4D4D]'>
        {SEARCH_OPTIONS.map((option) => (<SearchOption closeMenu={() => { setMenuOpen(false) }} key={option.id} onClick={() => { handleSelect(option.id) }} name={option.name} />))}
      </ul>
    )}

  </div>
  )
}

const SearchOption = ({ name, onClick, closeMenu }: { name: string, onClick: () => void, closeMenu: () => void }) => {
  const handleChangeSelection = () => {
    onClick()
    closeMenu()
  }
  return (
    <li>
      <button onClick={handleChangeSelection} className='hover:bg-[#fafafa] p-2 w-full text-left'>
        {name}
      </button>
    </li>
  )
}
