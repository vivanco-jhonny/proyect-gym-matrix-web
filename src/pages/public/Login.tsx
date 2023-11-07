import { Button, Divider, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useUserStore } from "../../store/UserSessionStore";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, google } from "../../Firebase";
import { useRef } from "react";

export const ButtonLogin: SxProps = {
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
export const ButtonLoginGoogle: SxProps = {
    background: "transparent",
    height: "50px",
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: "kanit",
    fontSize: "14px",
    color: "black",
    width: "100%",
    border: "2px solid black",
    fontWeight: "700",
    borderRadius: "0px",
    "&:hover": {
        background: "transparent",
        border: "2px solid black"
    }
}
export const Login = () => {
    const navigate = useNavigate();
    const setauth = useUserStore((state) => state.setuser);
    const emailRef = useRef({} as HTMLInputElement);
    const passwordRef = useRef({} as HTMLInputElement);

    const login = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setauth(userCredential.user);
                navigate("/private/client/myaccount");
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const googlepopup = () => {
        signInWithPopup(auth, google)
            .then((userCredential) => {
                setauth(userCredential.user);
                navigate("/private/admin/home");
            })
            .catch((error) => {
                console.error(error);
            })
    }



    return (
        <div>
            <div className="backlogin">
                <div className="login-form">
                    <form>
                        <h2>GYM MATRIX®</h2>
                        <Button sx={ButtonLoginGoogle} variant="outlined" onClick={() => googlepopup()}>Iniciar sesion con Google <i className="bi bi-google"></i></Button>
                        <Divider>o</Divider>
                        <section>
                            <label>Ingrese codigo de usuario:</label>
                            <input type="text" name="code" ref={emailRef} />
                        </section>
                        <section>
                            <label>Ingrese contraseña:</label>
                            <input type="text" name="password" ref={passwordRef} />
                        </section>
                        <section style={{ position: "relative" }}>
                            <button>¿Olvidaste la contraseña?</button>
                            <button style={{ position: "absolute", right: "0px" }} onClick={() => { navigate("/register") }}>¡Crea tu codigo Ahora!</button>
                        </section>
                        <Button sx={ButtonLogin} variant="contained" onClick={() => login(emailRef.current.value, passwordRef.current.value)}>Iniciar Sesion <i className="bi bi-box-arrow-in-right" style={{ fontSize: "24px" }}></i></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
