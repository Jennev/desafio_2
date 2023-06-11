
import SocialButton from "./SocialButton"
import Alert from "./Alert";
import Formulario from "./Formulario";

import { useState } from "react";

const Registro = ({ setStatus, estado, mensaje }) => {
    return (
        <>
            <div className="box">
                <h1>
                    Crea una Cuenta
                </h1>
                <SocialButton/>
                <p className="text-muted">
                    o usa tu email para registrarte
                </p>
                <Formulario setStatus={setStatus} />
                <Alert mensaje={mensaje} estado={estado} />
            </div>
        </>
    )
}

export default Registro