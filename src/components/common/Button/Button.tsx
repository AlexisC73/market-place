export const Button = ({ customClass, children, type = 'primary', wide = false, big = false }: { customClass?: string, type?: 'primary' | 'secondary' | 'alternative', children: string, wide?: boolean, big?: boolean }) => {
  const modifClass = type === 'primary' ? 'btn-primary' : type === 'secondary' ? 'btn-secondary' : 'btn-tertiary'
  return (<button className={`btn ${modifClass} ${wide ? 'btn-wide' : null} ${big ? 'btn-xl' : null} ${customClass}`}>{children}</button>)
}
