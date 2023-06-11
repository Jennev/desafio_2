import { Alert } from "react-bootstrap";

function Alerta({ mensaje, estado }) {
  return (
    <>
      {
      mensaje[estado] && 
      <Alert variant={mensaje[estado].variant}>
        {mensaje[estado].message}
      </Alert>
      }
    </>
  );
}

export default Alerta;