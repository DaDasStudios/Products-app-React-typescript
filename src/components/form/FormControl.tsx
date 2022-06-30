import React from "react"


export type FormControlProps = {
  label: string,
  placeholder?: string,
  type?: string,
  required?: boolean,
  name?: string,
  value?: any,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormControl = ({label, placeholder, type, required, name, value, onChange}: FormControlProps) => {
  return (
    <div className="py-3 px-5">
      <label htmlFor={label} className="text-gray-700 font-medium text-sm mb-2 block">{label}</label>
      <input className="text-gray-700 bg-gray-50 py-2 px-3 w-full rounded-md outline-none border shadow file:bg-gray-200 file:hover:bg-gray-300 file:border-none file:text-sm file:text-gray-800 file:rounded-md file:cursor-pointer" type={type || 'text'} required={required || false} placeholder={placeholder || ''} id={label} name={name} onChange={onChange} value={value}/>
    </div>
  )
}