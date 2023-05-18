import React from 'react'
import { FaHome } from 'react-icons/fa'

const CreateStoreModel = {
  values: {
    name: '',
    description: ''
  },
  form: [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Nombre de la tienda',
      icon: <FaHome />
    },
    {
      type: 'text',
      name: 'description',
      placeholder: 'Descripcion de la tienda',
      icon: <FaHome />
    }
  ],
  validate: (values) => {
    const errors = {}
    
    return errors
  }
}

export default CreateStoreModel
