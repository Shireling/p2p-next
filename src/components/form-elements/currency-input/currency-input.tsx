"use client"

import "./currency-input.css"

interface Props {
  placeholder?: number
  required?: boolean
  value: number
  currency?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CurrencyInput = ({
  placeholder,
  required,
  value,
  currency,
  handleChange,
}: Props) => {
  return (
    <div>
      <div className="dollar-input-wrap">
        <p className="dollar-input-sign">{currency}</p>
        <input
          className="currency-input"
          type="number"
          value={value > 0 ? value : ""}
          placeholder={placeholder?.toString()}
          required={required ? true : false}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default CurrencyInput
