
export const Home = () => {
    return (
        <div style={{ color: "black", display: "flex", flexFlow: "column" }}>
            <div style={{ fontWeight: "800", color: "black", textAlign: "center", width: "100%", fontSize: "64px" }}>
                Bienvenido
            </div>
            <div style={{ marginTop: "50px", marginBottom: "50px", width: "100%", textAlign: "center", fontWeight: "300", fontSize: "42px" }}>
                <button style={{width: "600x", height: "auto", border: "none", background: "rgb(0,0,0,0.1)", padding: "20px", fontWeight: "100", fontSize: "32px", borderRadius: "50px"}}>
                    Hoy estas libre no hay actividades
                </button>
            </div>
            <div style={{ marginTop: "50px", marginBottom: "50px", width: "100%", textAlign: "center"}}>
                <button style={{width: "600x", height: "auto", border: "none", background: "rgb(0,0,0,0.1)", padding: "20px", fontWeight: "100", fontSize: "32px", borderRadius: "50px"}}>
                    Aun no tienes menbresia comprar uno ahora
                </button>
            </div>
        </div>
    )
}