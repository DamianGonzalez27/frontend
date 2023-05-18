import React from 'react'
import { FaMailBulk } from 'react-icons/fa'

const SignInModel = {
  values: {
    email: '',
    password: ''
  },
  form: [
    {
      type: 'text',
      name: 'email',
      placeholder: 'Ingresa tu correo electronico',
      icon: <FaMailBulk />
    },
    {
      type: 'password',
      name: 'password'
    }
  ],
  validate: (values) => {
    const errors = {}

    return errors
  }
}

export default SignInModel
