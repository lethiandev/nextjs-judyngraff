import { ForwardedRef, ButtonHTMLAttributes, forwardRef } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline' | 'link'
  isActive?: boolean
}

export type ButtonRef = ForwardedRef<HTMLButtonElement>

const Button = ({ variant = 'solid', isActive, ...props }: ButtonProps, ref: ButtonRef) => (
  <button ref={ref} className={selectClassName(variant, isActive)} {...props} />
)

export default forwardRef(Button)

const selectClassName = (variant: 'solid' | 'outline' | 'link', isActive = true) =>
  `${className.base} ${className[isActive ? variant : 'inactive']}`

const className = {
  base: 'rounded-full border-2 px-5 py-1 text-lg font-semibold',
  solid: 'border-primary bg-primary text-on-primary hover:opacity-85',
  outline: 'border-primary text-primary hover:opacity-85',
  link: 'border-transparent text-primary hover:opacity-85',
  inactive: 'border-gray-300 bg-gray-300 text-on-surface hover:opacity-85',
}
