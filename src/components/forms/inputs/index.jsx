import React, { useCallback, useState } from 'react'
import { getIcon } from '../../../utils/icons'

/* eslint-disable react/prop-types */
export const TextInput = (
  {
    id,
    name,
    placeholder,
    value,
    onChange,
    error,
    icon
  }
) => {
  return (
    <div className="col-auto mb-3">
      <div className="input-group">
        <div className="input-group-text bg-primary text-light">
          {icon}
        </div>
        <input
          type='text'
          className="form-control"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {error
        ? (
        <div className="alert alert-danger p-1" role="alert">
          {error}
        </div>
          )
        : null}
    </div>
  )
}

export const SelectInput = (
  {
    id,
    name,
    values,
    onChange,
    error,
    icon,
    value
  }
) => {
  return (
    <div className="col-auto mb-3">
      <div className="input-group">
      <div className="input-group-text bg-primary text-light">
          {icon}
        </div>
        <select
          className="form-select"
          aria-label=".form-select-lg example"
          onChange={onChange}
          id={id}
          name={name}
          value={value}
        >
          {values.map((item) => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })}
        </select>
      </div>
      {error
        ? (
        <div className="alert alert-danger p-1" role="alert">
          {error}
        </div>
          )
        : null}
    </div>
  )
}

export const PasswordInput = ({ value, onChange, error, name = 'pasword' }) => {
  const [open, setOpen] = useState(true)

  const handlePassword = useCallback(() => {
    setOpen(!open)
  })

  return (
    <div className="col-auto mb-3">
      <div className="input-group">
        <div className="input-group-text bg-primary text-light">
          {getIcon('lock', open ? 'primary' : 'unlock')}
        </div>
        <input
          type={open ? 'password' : 'text'}
          className="form-control"
          id={name}
          name={name}
          placeholder="Contraseña"
          value={value}
          onChange={onChange}
        />
        <div
          className="input-group-text hover-overlay ripple clickable bg-orange text-light"
          onClick={handlePassword}
        >
          {getIcon('eye', open ? 'primary' : 'open')}
        </div>
      </div>
      {error
        ? (
        <div className="alert alert-danger p-1" role="alert">
          {error}
        </div>
          )
        : null}
    </div>
  )
}

const InputMaker = (
  {
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    icon
  }
) => {
  switch (type) {
    case 'text':
      return (
        <TextInput
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
          icon={icon}
        />
      )
    case 'password':
      return (<PasswordInput
          value={value}
          onChange={onChange}
          error={error}
          name={name}

        />)
    default:
      return (
        <div>
          Ocurrio un error
        </div>
      )
  }
}

export default InputMaker
