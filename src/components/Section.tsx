import clsx from 'clsx/lite'
import { ElementType } from 'react'

export type SectionVariant = 'primary' | 'surface' | 'surface-light' | 'background'

export type SectionProps = JSX.IntrinsicElements['section' | 'article'] & {
  as?: ElementType<any, 'section' | 'article'>
  variant?: SectionVariant
}

export default function Section({ as: Wrapper = 'section', ...props }: SectionProps) {
  const { variant = 'surface', className, ...htmlProps } = props
  return <Wrapper className={clsx(selectVariant(variant), className)} {...htmlProps} />
}

function selectVariant(variant: SectionVariant) {
  const className = {
    base: 'py-16 px-8 rounded-[2rem] md:rounded-[4rem] md:px-16 md:py-[6rem]',
    primary: 'bg-primary text-on-primary',
    surface: 'bg-surface text-on-surface',
    'surface-light': 'bg-surface-light text-on-surface-light',
    background: 'bg-background text-on-background',
  }

  return `${className.base} ${className[variant]}`
}
