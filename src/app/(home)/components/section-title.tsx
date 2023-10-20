import { ComponentProps, ReactNode } from 'react'

type SectionTitleProps = ComponentProps<'p'>

export function SectionTitle({ children, ...rest }: SectionTitleProps) {
  return (
    <p className="mb-5 pl-5 font-bold uppercase" {...rest}>
      {children}
    </p>
  )
}
