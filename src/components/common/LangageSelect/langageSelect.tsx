import { ArrowDown } from '@assets/icons'
import { useEffect, useRef, useState } from 'react'

export const LangageSelect = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current != null && !menuRef.current.contains(e.target as Node)) {
      setMenuOpen(false)
    }
  }

  const toggleMenu = () => { setMenuOpen(prev => !prev) }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return <div ref={menuRef} id="lang_select" className='relative'>
    <button onClick={toggleMenu} className='text-[14px] flex items-center gap-x-1 px-[11px] text-[#757575] h-9 rounded-[4px] hover:bg-[#fcfcfc]'>FR <span className='text-[16px]'><ArrowDown /></span></button>
    {menuOpen && (<ul id='lang-options' className='absolute top-11 right-0 w-[220px] bg-[#ededed] flex flex-col gap-y-px rounded-[4px] shadow-lg'>
      <li className='cursor-pointer text-[16px] p-4 bg-white hover:bg-[#fafafa]'>Français (French)</li>
      <li className='cursor-pointer text-[16px] p-4 bg-white hover:bg-[#fafafa]'>English (English)</li>
      <li className='cursor-pointer text-[16px] p-4 bg-white hover:bg-[#fafafa]'>Español (Spanish)</li>
      <li className='cursor-pointer text-[16px] p-4 bg-white hover:bg-[#fafafa]'>Nderlands (Dutch)</li>
    </ul>)}
  </div>
}
