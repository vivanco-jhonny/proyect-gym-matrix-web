import { Button } from "@mui/material";
import "./Menberships.css";
import { Container, GridLayout } from "../../utils/components/Utils";
import { useState } from "react";

export const Menberships = () => {
    return (
        <>
            <div style={{ marginTop: "90px", marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}>
                <center>
                    <h1 style={{ color: "black" }}>Escoje la menbresia que se acomode a tus preferencias.</h1>
                    <label style={{ fontSize: "20px", fontWeight: "300", width: "90%", color: "black" }}>
                        Descubre un mundo de beneficios exclusivos y experiencias únicas a través de nuestra membresía. Únete a nuestra comunidad y accede a contenido premium, descuentos especiales y eventos que te harán sentir parte de algo extraordinario. No pierdas la oportunidad de vivir una experiencia más allá de lo ordinario. ¡Tu membresía te está esperando!
                    </label>
                </center>
            </div>
            <Container margin={50}>
                <GridLayout gap={3} columns={3}>
                    <Menbership title="basico" price={59.9} details={["Toalla de sudor personal", "Trainer a disposicion", "Complemento Nutricional"]} />
                    <Menbership title="platino" selected={true} price={99.9} details={["Toalla de sudor personal", "Trainer a disposicion", "Complemento Nutricional", "Guia de dietas"]} />
                    <Menbership title="premium" price={159.9} details={["Toalla de sudor personal", "Trainer a disposicion", "Complemento Nutricional", "Guia de dietas", "Suplemento Creatina"]} />
                </GridLayout>
            </Container>
        </>
    )
}

interface MenbershipProps {
    selected?: boolean,
    title: string;
    price: number;
    details: Array<string>;
}

export const Menbership = ({ title, price, details, selected }: MenbershipProps) => {
    const [scale, setScale] = useState<number>(1);
    return (
        <article style={{ width: "100%", height: "550px", background: "transparent", position: "relative", transition: "all 0.3s", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px",border: selected ? "solid 3px black" : "solid 3px rgb(0,0,0,0.2)", transform: "scale("+ scale+")"}} onMouseOver={() => {setScale(1.08)}} onMouseOut={() => {setScale(1)}}>
            {selected && <p style={{ position: "absolute", left: "-10px", transform: "translateX(-50%) translateY(53px) rotate(-90deg)", top: "-1px", color: "white", background: "black", width: "130px", fontSize: "14px", fontWeight: "500", textAlign: "right", paddingRight: "15px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}><i className="bi bi-star-fill" style={{position: "absolute", transform: "translateX(-18px) translateY(1px) rotate(90deg)"}}></i>Recomendado</p>}
            <p style={{position: "absolute",left: "30px", top: "0px", transform: "translateY(-15px)", color: selected ? "white":"black",boxShadow: "0px 0px 0px 10px rgb(255, 230, 0)",background: selected ? "black" : "rgb(255,230,0)", width: "auto", fontSize: "12px", fontWeight: "300",padding: "5px",borderRadius: "10px"}}>{title} <i className="bi bi-ticket-perforated-fill"></i></p>
            <h1 style={{ marginTop: "30px", marginLeft: "20px", color: "rgb(0, 0, 0)", fontWeight: "900", fontSize: "32px" }}>{title.toUpperCase()} - <label style={{color: "rgb(0, 0, 0)", fontWeight: "300", fontSize: "32px" }}>GYM MATRIX</label><i className="bi bi-ticket-perforated-fill"></i></h1>
            <div style={{marginLeft: "20px"}}>
                <h1 style={{ marginTop: "0px", fontSize: "16px", fontWeight: "300", color: "black" }}>Menbresia <label style={{ fontSize: "18px", fontWeight: "600" }}>{title}/mes.<label style={{ fontSize: "18px", fontWeight: "300" }}>Activdades Ilimitadas</label></label></h1>
            </div>
            <Container margin={0}>
                <ul style={{ position: "absolute", top: "10px", left: "0px", width: "100%", padding: "20px", background: "rgba(0,0,0,0.1)" }}>
                    {
                        details?.map((detail: string) => {
                            return (
                                <li style={{ transform: "translateX(20px)", paddingRight: "10px", fontSize: "16px", fontWeight: 500, color: "black" }}>{detail}. <i className="bi bi-check"></i></li>
                            )
                        })
                    }
                </ul>
            </Container>
            <h5 style={{ position: "absolute", left: "20px", bottom: "215px", fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,0.5)" }}>1 Usuario</h5>
            <h5 style={{ position: "absolute", right: "20px", bottom: "215px", fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,0.5)" }}>S/ {price.toFixed(2)} / mes</h5>
            <div style={{ position: "absolute", bottom: "205px", width: "100%", height: "1px", background: "rgba(0,0,0,0.5)"}}></div> 
            <h5 style={{ position: "absolute", left: "20px", bottom: "150px", fontWeight: "500", fontSize: "28px", color: "black" }}>Total:</h5>
            <h5 style={{ position: "absolute", right: "20px", bottom: "150px", fontWeight: "800", fontSize: "32px", color: "black" }}>S/. {price.toFixed(2)}</h5>
            <Button sx={{ position: "absolute", fontFamily: "kanit", left: "40px", bottom: "70px", width: "calc(100% - 80px)", background: "black", color: "white", border: "none", fontSize: "22px", fontWeight: "700", height: "50px", borderRadius: "25px" }}>
                Obtener ahora
            </Button>
            <button style={{ position: "absolute", left: "40px", bottom: "40px", width: "calc(100% - 80px)", background: "transparent", color: "black", border: "none", fontSize: "16px", fontWeight: "300", height: "30px" }}>
                Ver Detalles
            </button>
        </article>
    )
}
