import Header from '@components/ui/Header'
import { type PropsWithChildren } from 'react'

export const WithHeader = ({ children }: PropsWithChildren) => {
  return <div>
    <Header />
    {children}
  </div>
}
