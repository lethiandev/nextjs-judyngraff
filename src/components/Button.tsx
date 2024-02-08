import { ForwardedRef, ButtonHTMLAttributes, forwardRef } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline' | 'link'
}

export type ButtonRef = ForwardedRef<HTMLButtonElement>

const Button = ({ variant = 'solid', ...props }: ButtonProps, ref: ButtonRef) => (
  <button ref={ref} className={`${className.base} ${className[variant]}`} {...props} />
)

export default forwardRef(Button)

const className = {
  base: 'rounded-full border-2 px-5 py-1 text-lg font-semibold',
  solid: 'border-primary bg-primary text-on-primary hover:opacity-85',
  outline: 'border-primary text-primary hover:opacity-85',
  link: 'border-transparent text-primary hover:opacity-85',
}
