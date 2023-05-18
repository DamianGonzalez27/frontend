import moment from 'moment'
/**
 * @module validations_rules
 * Este modulo tiene las funciones necesarias para hacer validaciones
 * sobre las variables que estemos usando en la aplicacion
 */

/**
 * Validación de password
 *
 * La contraseña debe tener al menos 8 caracteres
 * La contraseña no debe contener espacios en blanco
 * La contraseña debe contener al menos una letra mayúscula
 * La contraseña debe contener al menos una letra minúscula
 * La contraseña debe contener al menos un número
 * La contraseña debe contener al menos un carácter especial
 *
 * @param {string} password
 * @returns {Object}
 */
const validatePassword = (password) => {
  const errors = {}

  if (password.length < 8) {
    errors.characters = true
  }
  if (/\s/.test(password)) {
    errors.blank = true
  }
  if (!/[A-Z]/.test(password)) {
    errors.capitalize = true
  }
  if (!/[a-z]/.test(password)) {
    errors.lower = true
  }
  if (!/\d/.test(password)) {
    errors.number = true
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.special = true
  }

  return errors
}

/**
 * Validacion de parámetro requerido
 *
 * @param {String} value
 * @returns {Boolean}
 */
const validateRequired = (value) => {
  if (!value) return true

  return false
}

/**
 * Validación de numeros de telefono
 *
 * @param {String} value
 * @returns {Boolean}
 */
const validatePhone = (value) => {
  const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
  return regex.test(value)
}

/**
 * Validacion de un minimo de caracteres
 *
 * @param {String} str
 * @param {Number} min
 * @returns {Boolean}
 */
const validateMin = (str, min) => {
  return str.length >= min
}

/**
 * Validacion de un maximo de caracteres
 *
 * @param {String} str
 * @param {Number} max
 * @returns {Boolean}
 */
const validateMax = (str, max) => {
  return str.length <= max
}

/**
 * Validacion de un rango numerico
 *
 * @param {Number} num
 * @param {Number} min
 * @param {Number} max
 * @returns {Boolean}
 */
const validateRange = (num, min, max) => {
  return num >= min && num <= max
}

/**
 * Validacion de un rqango de fechas
 *
 * @param {Date} date
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns
 */
const validateRangeDates = (date, startDate, endDate) => {
  return moment(date).isBetween(startDate, endDate)
}

/**
 * Validacion de un formato de fecha
 *
 * @param {Date} date
 * @returns
 */
const validateDate = (date) => {
  return moment(date, 'YYYY-MM-DD', true).isValid()
}

/**
 * Validacion de una fecha anterior
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns
 */
const isDateBefore = (date1, date2) => {
  const m1 = moment(date1, 'YYYY-MM-DD')
  const m2 = moment(date2, 'YYYY-MM-DD')
  return m1.isBefore(m2)
}

/**
 * Validacion de una fecha posterior
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns
 */
const isDateAfter = (date1, date2) => {
  const moment1 = moment(date1, 'YYYY-MM-DD')
  const moment2 = moment(date2, 'YYYY-MM-DD')
  return moment1.isAfter(moment2)
}

export {
  validatePassword,
  validateRequired,
  validatePhone,
  validateMin,
  validateMax,
  validateRange,
  validateDate,
  validateRangeDates,
  isDateBefore,
  isDateAfter
}
