import { Container, GridLayout } from "../../utils/components/Utils";
import "./Plans.css";
import { useState } from "react";

export const Plans = () => {
    return (
        <div>
            <div style={{ marginTop: "90px" }}>
                <center>
                    <h1 style={{ color: "black" }}>Escoge tu camino, forja tu fuerza: ¡Tu éxito, tu plan en el gym!</h1>
                    <label style={{ fontSize: "20px", fontWeight: "300", width: "90%", color: "black" }}>
                        Elige más que un plan de estancia en el gimnasio, elige una transformación personalizada. Nuestros
                        planes están diseñados para llevar tus metas al siguiente nivel, brindándote las herramientas y el
                        apoyo necesarios para lograr el éxito. Tu viaje hacia la fuerza, la resistencia y la confianza
                        comienza aquí. ¿Listo para comprometerte con tu mejor versión?
                    </label>
                </center>
            </div>
            <Container margin={40}>
                <GridLayout columns={5} gap={2}>
                    <Plan title="Baile Funcional" days={1} price={9.90} details={["Trainer a dispocision", "Baile"]} selected={false}/>
                    <Plan title="Día Full" days={1} price={14.90} details={["Trainer a dispocision", "Todas las maquinas a dispocicion", "Baile"]}  selected={true}/>
                    <Plan title="1 Mes" days={30} price={119.90} details={["Trainer a dispocision", "Todas las maquinas a dispocicion", "Guia de Dietas", "Crea tu codigo de usuario"]}  selected={false}/>
                    <Plan title="3 Meses" days={90} price={269.90} details={["Trainer a dispocision", "Todas las maquinas a dispocicion", "Crea tu codigo de usuario", "Te regalamos Complemento nutricional"]}  selected={false}/>
                    <Plan title="6 Meses" days={180} price={519.90} details={["Trainer a dispocision", "Crea tu codigo de usuario", "Todas las maquinas a dispocicion", "Suplemento Creatina"]}  selected={false}/>
                </GridLayout>
            </Container>
        </div>
    )
}

interface PlanProps {
    selected: boolean,
    title: string;
    days: number;
    price: number;
    details: Array<string>
}

export const Plan = ({ title, days, price, details, selected }: PlanProps) => {
    const [scale, setScale] = useState<number>(1);

    return (
        <article style={{ width: "100%", height: "550px", background: "transparent", position: "relative", transform: "scale("+ scale+")", transition: "all 0.3s", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", borderTopLeftRadius: selected ? "0px":"10px", border: selected ? "solid 2px black" : "solid 2px rgb(0,0,0,0.2)" }} onMouseOver={() => {setScale(1.08)}} onMouseOut={() => {setScale(1)}}>
            {selected && <p style={{ position: "absolute", left: "-10px", transform: "translateX(-50%) translateY(54px) rotate(-90deg)", top: "-1px", color: "white", background: "black", width: "130px", fontSize: "14px", fontWeight: "500", textAlign: "right", paddingRight: "15px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}><i className="bi bi-star-fill" style={{position: "absolute", transform: "translateX(-18px) translateY(1px) rotate(90deg)"}}></i>Recomendado</p>}
            <p style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "-1px", color: "white", background: "black", clipPath: "polygon(0 0,100% 0, 90% 100%, 10% 100%)", width: "150px", fontSize: "12px", fontWeight: "700", textAlign: "center", padding: "5px" }}>Duracion {days} Día(s) <i className="bi bi-hourglass-top"></i></p>
            <div style={{margin: "20px"}}>
                <h1 style={{ marginTop: "40px", fontSize: "14px", fontWeight: "300", color: "black" }}>Plan <label style={{ fontSize: "16px", fontWeight: "600" }}>Premium x {days} Día(s).</label></h1>
                <h1 style={{ marginTop: "0px", fontSize: "28px", fontWeight: "800", color: "black" }}>{title}<label style={{ fontSize: "18px", fontWeight: "300" }}>-Activdades Ilimitadas</label></h1>
            </div>
                <ul style={{ position: "absolute", top: "150px", left: "0px", width: "100%", padding: "20px", background: "rgba(0,0,0,0.2)" }}>
                    {
                        details.map((detail: string) => {
                            return (
                                <li key={detail} style={{ transform: "translateX(20px)", paddingRight: "10px", fontSize: "14px", fontWeight: 500, color: "black" }}>
                                    {detail}. <i className="bi bi-check" style={{ color: "black" }}></i>
                                </li>
                            )
                        })
                    }
                </ul>
            <h5 style={{ position: "absolute", left: "20px", bottom: "215px", fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,0.5)" }}>1 Usuario</h5>
            <h5 style={{ position: "absolute", right: "20px", bottom: "215px", fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,0.5)" }}>S/ {price.toFixed(2)} / {title}</h5>
            <div style={{ position: "absolute", bottom: "205px", width: "100%", height: "1px", background: "rgba(0,0,0,0.5)"}}></div> 
            <h5 style={{ position: "absolute", left: "20px", bottom: "150px", fontWeight: "500", fontSize: "28px", color: "black" }}>Total:</h5>
            <h5 style={{ position: "absolute", right: "20px", bottom: "150px", fontWeight: "800", fontSize: "32px", color: "black" }}>S/. {price.toFixed(2)}</h5>
            <button style={{ position: "absolute", left: "40px", bottom: "70px", width: "calc(100% - 80px)", background: "black", color: "white", border: "none", fontSize: "22px", fontWeight: "700", height: "50px", borderRadius: "25px" }}>
                Empezar ahora
            </button>
            <button style={{ position: "absolute", left: "40px", bottom: "40px", width: "calc(100% - 80px)", background: "transparent", color: "black", border: "none", fontSize: "16px", fontWeight: "300", height: "30px" }}>
                Ver Detalles
            </button>
        </article>
    )
}
