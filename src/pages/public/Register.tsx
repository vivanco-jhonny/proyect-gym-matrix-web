import { Button, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useUserDataStore } from "../../store/UserDataStore";

export const ButtonRegister: SxProps = {
    background: "black",
    height: "50px",
    fontFamily: "kanit",
    fontSize: "14px",
    color: "white",
    width: "100%",
    fontWeight: "700",
    borderRadius: "0px",
    "&:hover": {
        background: "black"
    }
}

export const Register = () => {
    const navigate = useNavigate();
    const nombreRef = useRef({} as HTMLInputElement);
    const apellidoRef = useRef({} as HTMLInputElement);
    const emailRef = useRef({} as HTMLInputElement);
    const passwordRef = useRef({} as HTMLInputElement);
    const celularRef = useRef({} as HTMLInputElement);
    const dateRef = useRef({} as HTMLInputElement);

    const add = useUserDataStore((state) => state.add);

    const saveUser = () => {
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((result) => {
                add(result.user.uid, {
                    name: nombreRef.current.value,
                    lastname: apellidoRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                    phone: celularRef.current.value,
                    dateofbird: dateRef.current.value
                });
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="backregister">
                <div className="register-form">
                    <form>
                        <h2>GYM MATRIX®</h2>
                        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
                            <section>
                                <label>Nombre:</label>
                                <input type="text" name="nombre" ref={nombreRef} />
                            </section>
                            <section>
                                <label>Apellido:</label>
                                <input type="text" name="apellido" ref={apellidoRef} />
                            </section>
                        </div>
                        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
                            <section>
                                <label>Correo:</label>
                                <input type="email" name="correo" ref={emailRef} />
                            </section>
                            <section>
                                <label>Celular:</label>
                                <input type="text" name="celular" ref={celularRef} />
                            </section>                            
                            <section>
                                <label>Contraseña:</label>
                                <input type="password" name="password" ref={passwordRef} />
                            </section>
                        </div>
                        <div>
                            <section>
                                <label>Fecha de Nacimiento:</label>
                                <input type="date" name="datenacimiento" ref={dateRef} />
                            </section>
                        </div>
                        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                            <input type="checkbox" name="terms" style={{ accentColor: "black" }} />
                            <label style={{ color: "black", textDecoration: "underline" }}> Aceptar Terminos y Condiciones</label>
                        </div>
                        <Button sx={ButtonRegister} variant="contained" onClick={() => {saveUser()}}>Verificar Correo <i className="bi bi-box-arrow-in-right" style={{ fontSize: "24px" }}></i></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
