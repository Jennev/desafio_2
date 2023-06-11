import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./main.css"
import Registro from './components/Registro'

const Mensaje = {
  incompleto: {
    variant: "warning",
    message: "Debes llenar todos los campos."
  },
  correoInvalido: {
    variant: "danger",
    message: "El correo ingresado no es valido. "
  },
  errorContraseña: {
    variant: "danger",
    message: "Contraseñas ingresadas no coinciden."
  },
  cuentaCreada: {
    variant: "success",
    message: "Cuenta registrada exitosamente"
  }
}

function App() {
  const [ estado,setStatus] = useState()

  return (
    <>
      <Registro mensaje={Mensaje} estado={estado} setStatus={setStatus} />

    </>
  )
}

export default App
