"use client"

import './select-dropdown.css'

interface Props {
  value: string
  children: React.ReactNode[]
  handleChange: React.ChangeEventHandler<HTMLSelectElement>
}

const SelectDropdown = ({value, children, handleChange}: Props) => {
  return (
    <select
      className="select-dropdown"
      value={value}
      onChange={handleChange}
    >
      {...children}
    </select>
  )
}

export default SelectDropdown
