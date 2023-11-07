import mujer from "../../../public/multimedia/img-gym-09.png";
import hombre from "../../../public/multimedia/img-gym-08.png";

interface SubtitleProps {
    title: string,
    color?: "black" | "white" | "primary",
    width: string,
    size: string
}

export const Subtitle = ({ title, color = "black", width, size }: SubtitleProps) => {
    return (
        <center>
            <h2 style={{ margin: "10px", fontWeight: "300", fontSize: size, width: width, marginBottom: "100px", color: color }}>
                {title}
            </h2>
        </center>
    );
}

interface BoxPersonInfoProps {
    genere: "Hombre" | "Mujer",
    side: "right" | "left"
}

export const BoxPersonInfo = ({ genere, side }: BoxPersonInfoProps) => {

    return (
        <div style={{ top: "0px", left: "0px", width: "100%", height: "100%", display: "flex", flexDirection: side == "right" ? "row" : "row-reverse" }}>
            <div style={{ position: "relative", background: "transparent", overflow: "hidden", width: "50%" }}>
                <img src={genere == "Hombre" ? hombre : mujer} alt="fsad" style={{ width: "100%", boxShadow: "0px 0px 20px black" }} />
            </div>
            <div style={{ width: "50%", marginLeft: side == "left" ? "20px" : "0px" }}>
                <h3 style={{ fontSize: "90px", fontWeight: "900", color: "black", marginRight: side == "right" ? "20px" : "0px" }}>GYM MATRIX CLUB PREMIUM {genere}</h3>
                <div style={{ color: "black", fontSize: "32px", display: "flex", gap: "2rem", width: "100%", marginTop: "50px", paddingRight: "20px", flexFlow: "column" }}>
                    <BoxOptionsClass title="Baile" />
                    <BoxOptionsClass title="Yoga" />
                    <BoxOptionsClass title="Funcional" />
                    <BoxOptionsClass title="Spinning" />
                </div>
            </div>
        </div>
    );
}

interface BoxOptionsClassProps {
    title: string
}

export const BoxOptionsClass = ({ title }: BoxOptionsClassProps) => {
    const boxoptions: React.CSSProperties = {
        position: "relative",
        background: "rgba(0,0,0,0.1)",
        fontWeight: "800",
        height: "90px",
        paddingTop: "20px",
        borderRadius: "50px",
        paddingLeft: "20px"
    }
    return (
        <section style={boxoptions}>{title} - <label style={{fontWeight: 300}}>Actividad</label>
            <button style={{ position: "absolute", right: "20px", bottom: "25px", width: "220px", background: "none", color: "black", border: "2px solid black", fontSize: "22px", fontWeight: "500", height: "40px", borderRadius: "20px" }}>
                Más información <i className="bi bi-chevron-right"></i>
            </button>
        </section>
    );
}

interface ContainerProps {
    margin: number,
    children: JSX.Element | JSX.Element[]
}

export const Container = ({ margin, children }: ContainerProps) => {
    return (
        <div style={{ position: "relative", margin: `${margin}px`, overflow: "visible" }}>{children}</div>
    )
}

interface GridLayoutProps {
    gap: number,
    columns: number,
    children: JSX.Element | JSX.Element[]
}

export const GridLayout = ({ gap, columns, children }: GridLayoutProps) => {
    return (
        <div style={{ display: "grid", width: "100%", gap: `${gap}rem`, gridTemplateColumns: `repeat(${columns}, 1fr)`, height: "auto" }}>
            {children}
        </div>
    )
}