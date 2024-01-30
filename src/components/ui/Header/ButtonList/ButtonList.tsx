import { HeartIcon, MessageIcon, NotificationIcon } from '@assets/icons'
import IconBtn from '@components/common/IconBtn'

export const ButtonList = () => {
  return <div className='flex text-[#969898]'>
  <IconBtn>
    <MessageIcon className='text-[24px]' />
  </IconBtn>
  <IconBtn>
    <NotificationIcon className='text-[24px]' />
  </IconBtn>
  <IconBtn>
    <HeartIcon className='text-[24px]' />
  </IconBtn>
</div>
}
