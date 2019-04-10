import * as React from 'react'

export interface PickerProps {
  value: string,
  onChange: (value: string) => void,
  options: string[]
}

const Picker = ({ value, onChange, options }: PickerProps) => (
  <span>
    <h1>{value}</h1>
    <select onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
        <option value={option} key={option}>
          {option}
        </option>)
      }
    </select>
  </span>
)

export default Picker
