"use client"

import "./text-input.css"

interface Props {
  inputType: "text" | "email" | "password"
  placeholder?: string
  required?: boolean
  value: string
  currency?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({
  inputType,
  placeholder,
  required,
  value,
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
    />
  )
}

export default TextInput
