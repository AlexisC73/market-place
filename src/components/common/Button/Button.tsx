export const Button = ({ children, type = 'primary' }: { type?: 'primary' | 'secondary', children: string }) => {
  const customClass = type === 'primary' ? 'bg-[#00757f] text-white border-[#00757f]' : 'bg-white text-[#00757f] border-[#00757f]'
  return (<button className={`border-[1px] text-[12px] px-3 rounded-[4px] h-[28px] ${customClass}`}>{children}</button>)
}
