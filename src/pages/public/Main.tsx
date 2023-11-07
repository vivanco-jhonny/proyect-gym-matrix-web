import { Button, SxProps } from "@mui/material"
import { Link, Navigate, Route, useNavigate } from "react-router-dom"
import { Public } from "../../routes/routes"
import { Contact } from "./Contact"
import { Gallery } from "./Gallery"
import { Landing } from "./Landing"
import "./Main.css"
import { Menberships } from "./Menberships"
import Notfound from "./Notfound"
import { Plans } from "./Plans"
import { Schedules } from "./Schedules"

export const ButtonContainedPrimary: SxProps = {
    fontFamily: "kanit",
    color: "white",
    background: "black",
    ":hover": {
        background: "black",
        color: "white"
    }
}

export const ButtonOutlinedPrimary: SxProps = {
    fontFamily: "kanit",
    color: "black",
    border: "1px solid black",
    ":hover": {
        color: "black",
        border: "1px solid black"
    }
}

export const Head = () => {
    return (
        <header>
            <label>GYM MATRIX®</label>
        </header>
    );
}

export const Nav = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="navegacion">
            
                <Link to={Public.Landing}><button className="btn">Inicio</button></Link>
                <Link to={Public.Menberships}><button className="btn">Menbresias</button></Link>
                <Link to={Public.Plans}><button className="btn">Planes</button></Link>
                <Link to={Public.Gallery}><button className="btn">Galeria</button></Link>
                <Link to={Public.Schedules}><button className="btn">Horarios</button></Link>
                <Link to={Public.Contact}><button className="btn" style={{ marginRight: "10px" }}>Contacto</button></Link>
                <Button variant="contained" onClick={() => { navigate("/login") }} sx={ButtonContainedPrimary} disableElevation>Iniciar Sesion</Button>
                <Button variant="outlined" onClick={() => { navigate("/register") }} sx={ButtonOutlinedPrimary}>Registrarse</Button>
            </div>
        </nav>
    );
}

export const Foot = () => {
    return (
        <footer>
            <section>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-whatsapp"></i>
            </section>
            <p className="copyright">© {new Date().getFullYear()} Gym Matrix Club Premium.</p>
        </footer>
    );
}

export const Main = () => {
    return (
        <>
            <Head/>
            <Nav />
            <div style={{ marginTop: "70px" }}>
                <Notfound>
                    <Route path="/" element={<Navigate to={Public.Landing} />} />
                    <Route path={Public.Contact} element={<Contact />} />
                    <Route path={Public.Gallery} element={<Gallery />} />
                    <Route path={Public.Landing} element={<Landing />} />
                    <Route path={Public.Menberships} element={<Menberships />} />
                    <Route path={Public.Plans} element={<Plans />} />
                    <Route path={Public.Schedules} element={<Schedules />} />
                </Notfound>
            </div>
            <Foot />
        </>
    )
}
