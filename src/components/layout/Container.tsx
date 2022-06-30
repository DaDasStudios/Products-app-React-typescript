import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

export default ({ children }: Props ) => {
  return (
    <div className="container mx-auto my-28">
        {children}
    </div>
  )
}
