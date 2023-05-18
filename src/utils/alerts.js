import Swal from 'sweetalert2'

export const errorAlert = (message) => {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: message,
    showConfirmButton: false,
    timer: 1000
  })
}

export const successAlert = (message) => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1000
  })
}
