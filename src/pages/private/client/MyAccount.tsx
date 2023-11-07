import { useEffect } from "react";
import { useUserStore } from "../../../store/UserSessionStore";
import { useUserDataStore } from "../../../store/UserDataStore";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";
import { useNavigate } from "react-router-dom";


interface DataEditUserProps {
    type: string,
    value: string,
    children: JSX.Element
}

const DataEditUser = ({ type, value, children }: DataEditUserProps) => {
    return (
        <div style={{ width: "100%", display: "grid", marginTop: "0px", marginBottom: "20px", gridTemplateColumns: "70px 330px calc(100% - 400px)", paddingLeft: "50px", paddingRight: "50px", paddingTop: "20px", paddingBottom: "15px", background: "rgb(0,0,0,0.1)", borderRadius: "50px" }}>
            {children}
            <label style={{ fontSize: "18px", color: "black", paddingTop: "8px" }}>{value}</label>
            <button style={{ border: "solid 1px black", background: "none", borderRadius: "20px", height: "40px", color: "black", fontWeight: "500" }}>Editar {type}</button>
        </div>
    )
}

export const MyAccount = () => {
    const user = useUserStore((state) => state.user);
    const datauser = useUserDataStore((state) => state.user);
    const navigate = useNavigate();
    const setuser = useUserDataStore((state) => state.setuser);
    useEffect(() => {
        setuser(user ? user.uid : "");
    }, [user])
    return (
        <div style={{marginTop: "80px"}}>
            <div style={{ position: "absolute", top: "20px", width: "auto", left: "50%", transform: "translate(-50%)", height: "auto", background: "none" }}>
                <div style={{ marginLeft: "50%", transform: "translateX(-50%)", width: "100px", height: "100px", borderRadius: "50%", background: "black" }}></div>
                <div style={{ textAlign: "center", color: "black", marginTop: "10px" }}>
                    <label>en linea</label>
                    <br />
                    <label style={{ fontSize: "32px", fontWeight: "800", textTransform: "capitalize" }}>{`${datauser?.name} ${datauser?.lastname}`}</label>
                    <br />
                    <label style={{ fontSize: "18px", fontWeight: "300" }}>{datauser?.email}</label>
                </div>
            </div>
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "240px", width: "1000px", background: "rgb(255,230,0)", paddingLeft: "80px", paddingTop: "20px", paddingBottom: "20px", paddingRight: "80px" }}>
                <DataEditUser type="Telefono Movil" value={"+51 " + datauser?.phone}>
                    <i className="bi bi-phone" style={{ fontSize: "32px", color: "black" }}></i>
                </DataEditUser>
                <DataEditUser type="Fecha de Cumpleaños" value={datauser?.dateofbird}>
                    <i className="bi bi-calendar4-event" style={{ fontSize: "32px", color: "black" }}></i>
                </DataEditUser>
                <DataEditUser type="Correo" value={datauser?.email}>
                    <i className="bi bi-envelope" style={{ fontSize: "32px", color: "black" }}></i>
                </DataEditUser>
                <div style={{ width: "100%", display: "grid", marginTop: "0px", marginBottom: "20px", gridTemplateColumns: "1fr 1fr", padding: "30px", gap: "30px", background: "rgb(0,0,0,0.1)", borderRadius: "50px" }}>
                    <button style={{ border: "solid 0px black", background: "red", borderRadius: "20px", height: "40px", color: "white" }}>Eliminar Cuenta</button>
                    <button style={{ border: "solid 1px black", background: "black", borderRadius: "20px", height: "40px", color: "white" }} onClick={() => {signOut(auth).then(() => {navigate("/login")})}}>Cerrar Sesion</button>
                </div>
            </div>
        </div>
    );
}