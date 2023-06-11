import { useState } from "react";
import Alert from "./Alert"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"


const Registro = ({ setStatus, estado, mensaje }) => {
    return (
        <>
            <div className="box">
                <h1>
                    Crea una Cuenta
                </h1>
                <div className="d-flex gap-3">
                    <SocialButton icon={"Facebook"} />
                    <SocialButton icon={"Github"} />
                    <SocialButton icon={"LinkedIn"} />
                </div>
                <p className="text-muted">
                    Usta tu correo para registrarte
                </p>
                <Formulario setStatus={setStatus} />
                <Alert mensaje={mensaje} estado={estado} />
            </div>
        </>
    )
}

export default Registro