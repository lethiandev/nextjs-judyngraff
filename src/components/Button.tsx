import { ForwardedRef, ButtonHTMLAttributes, forwardRef } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline' | 'link'
}

export type ButtonRef = ForwardedRef<HTMLButtonElement>

const Button = ({ variant = 'solid', ...props }: ButtonProps, ref: ButtonRef) => (
  <button ref={ref} className={`${className.base} ${className[variant]}`} {...props} />
)

const className = {
  base: 'rounded-full px-6 py-2 text-[20px] font-semibold',
  solid: 'bg-lime-500 text-white active:bg-lime-400 hover:bg-lime-600',
  outline:
    'text-lime-500 outline-2 -outline-offset-2 outline-lime-500 outline active:text-lime-400 active:outline-lime-400 hover:text-lime-600 hover:outline-lime-600',
  link: 'text-lime-500 active:text-lime-400 hover:text-lime-600',
}

export default forwardRef(Button)
