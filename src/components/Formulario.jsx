import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formulario = ({ setStatus }) => {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const [user, setUser] = useState({
        nombre: "",
        correo: "",
        contraseña: "",
        confirmContraseña: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            user.nombre.trim() == "" ||
            user.correo.trim() == "" ||
            user.contraseña.trim() == "" ||
            user.confirmContraseña.trim() == ""
        ) {
            setStatus("incompleto")
            return;
        }
        /* hacer que el email tenga formato correcto */
        if (!emailRegex.test(user.correo)) {
            setStatus("correoInvalido")
            return;
        }

        if (user.password !== user.confirmContraseña) {
            setStatus("errorContraseña")
            return;
        }

        setStatus("cuentaCreada")
    }


    return (
        <>
            <Form onSubmit={handleSubmit} className="w-50">
                <div className="form-group ">
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="Nombre"
                            placeholder="Nombre"
                            onChange={(e) => setUser({ ...user, nombre: e.target.value })}
                            value={user.nombre}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="tuemail@ejemplo.com"
                            onChange={(e) => setUser({ ...user, correo: e.target.value })}
                            value={user.correo}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setUser({ ...user, contraseña: e.target.value })}
                            value={user.contraseña}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Confirma tu contraseña"
                            onChange={(e) => setUser({ ...user, confirmContraseñad: e.target.value })}
                            value={user.confirmContraseña}
                        />
                    </Form.Group>

                    <Button
                        className="btn btn-success btn-block w-100 pt-1 pb-1"
                        type="submit"
                    >
                        Registrarse
                    </Button>
                </div>
            </Form>
        </>
    );
};
export default Formulario;
