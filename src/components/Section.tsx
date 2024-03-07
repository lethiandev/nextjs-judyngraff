import { ElementType, ReactNode } from 'react'

export type SectionProps = {
  as?: ElementType<any, 'div' | 'section' | 'article'>
  variant?: 'primary' | 'surface' | 'surface-light' | 'background'
  children?: ReactNode
}

export default function Section({ as: Wrapper = 'section', variant, children }: SectionProps) {
  const className = selectVariant(variant)
  return <Wrapper className={className}>{children}</Wrapper>
}

function selectVariant(variant: SectionProps['variant'] = 'surface') {
  const className = {
    base: 'px-16 py-[6rem] rounded-[4rem]',
    primary: 'bg-primary text-on-primary',
    surface: 'bg-surface text-on-surface',
    'surface-light': 'bg-surface-light text-on-surface-light',
    background: 'bg-background text-on-background',
  }

  return `${className.base} ${className[variant]}`
}
