import './button.css'

interface Props {
  children: React.ReactNode
  inputType?: 'submit'
  hollow?: boolean
  handleClick?: (() => void) | ((e: React.FormEvent) => Promise<void>)
}

const Button = ({children, inputType, hollow, handleClick}: Props) => {
  return (
    <button className={hollow ? 'hollow' : ''} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
