import Button from '@components/common/Button'
import { Link } from 'react-router-dom'

export const SignButtons = () => {
  return <div className='flex p-4 lg:p-0 flex-col gap-y-2 lg:gap-y-0 lg:flex-row lg:gap-x-2'>
    <Button customClass='btn-mobile-xl btn-mobile-big' type='secondary'>S'inscrire | Se connecter</Button>
    <Link to="#" className='btn btn-primary btn-mobile-wide btn-mobile-xl'>Vends tes articles</Link>
    <Link to="#" className='lg:hidden btn btn-tertiary btn-mobile-wide btn-mobile-xl'>Ton guide Vinted</Link>
  </div>
}
