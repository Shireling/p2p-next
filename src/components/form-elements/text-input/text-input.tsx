"use client"

import "./text-input.css"

interface Props {
  inputType: "text" | "email" | "password"
  placeholder?: string
  required?: boolean
  value: string
  currency?: string
  name: string
  register: (name: string) => any
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({
  inputType,
  placeholder,
  required,
  value,
  name,
  register,
  handleChange
}: Props) => {
  return (
    <input
      className="text-input"
      type={inputType}
      value={value}
      placeholder={placeholder}
      required={required ? true : false}
      onChange={handleChange}
      {...register(name)}
    />
  )
}

export default TextInput
