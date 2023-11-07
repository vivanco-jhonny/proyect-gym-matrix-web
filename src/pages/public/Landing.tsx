import { Box, Button, SxProps } from "@mui/material";
import classe1 from "../../../public/multimedia/home-programs-img1.jpg";
import classe2 from "../../../public/multimedia/home-programs-img2.jpg";
import classe3 from "../../../public/multimedia/home-programs-img3.jpg";
import classe4 from "../../../public/multimedia/home-programs-img4.jpg";
import baner from "../../../public/multimedia/img-gym-01.jpg";
import "./Landing.css";
import { BoxPersonInfo, GridLayout, Subtitle } from "../../utils/components/Utils";
import { useState } from "react";
export const ButtonStart: SxProps = {
    paddingLeft: "90px",
    paddingRight: "90px",
    fontFamily: "kanit",
    fontSize: "40px",
    fontWeight: "900",
    borderRadius: "0px",
    color: "black",
    background: "rgb(255, 230, 0)",
    clipPath: "polygon(10% 0,100% 0, 90% 100%, 0 100%)",
    "&:hover": {
        background: "rgb(255, 230, 0)",
    }
}
export const ButtonStartMovil: SxProps = {
    width: "250px",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontFamily: "kanit",
    fontSize: "15px",
    borderRadius: "0px",
    color: "black",
    background: "rgb(255, 230, 0)",
    clipPath: "polygon(10% 0,100% 0, 90% 100%, 0 100%)",
    "&:hover": {
        background: "rgb(255, 230, 0)",
    }
}

export const Baner = () => {
    return (
        <div style={{ position: "relative" }}>
            <div className="baner">
                <img src={baner} alt="baner" style={{ width: "100%" }} />
                <div style={{ position: "absolute", transform: "translateX(-50%)", left: "50%", top: "30%" }}>
                    <center>
                        <h5 style={{ fontSize: "90px", fontWeight: "900", color: "white", width: "650px", marginTop: "10px", backdropFilter: "blur(50px)" }}>
                            GYM MATRIX CLUB PREMIUM
                        </h5>
                    </center>
                </div>
                <div className="borderbutton">
                    <Button sx={ButtonStart} variant="contained">¡EMPEZAR AHORA! <i className="bi bi-play-fill"></i></Button>
                </div>
            </div>
        </div>
    );
}

interface ClassTrainingProps {
    title: string,
    image: string
}

export const ClassTraining = ({title, image}: ClassTrainingProps) => {
    const [scale, setScale] = useState<number>(1);
    const [color, setColor] = useState<string>("white");
    const [background, setBackground] = useState<string>("transparent");
    return (
        <section style={{position: "relative", overflow: "hidden", height: "100%"}} onMouseOver={() => {setScale(1.3), setColor("black"), setBackground("white")}} onMouseOut={() => {setScale(1), setColor("white"), setBackground("transparent")}}>
            <h1 style={{zIndex: "2", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "30px", color: "white", fontWeight: "91ço5100"}}>{title.toUpperCase()}</h1>
            <button style={{zIndex: "2", transition: "all 0.1s", fontSize: "24px", color: color, position: "absolute", backdropFilter: "blur(20px)", left: "50%", transform: "translateX(-50%)", bottom: "40px", fontWeight: "900", width: "90%", background: background, border: "1px solid white", height: "40px"}}>Ver detalles</button>
            <img style={{width: "100%", height: "auto", transform: "scale("+ scale +")", transition: "all 0.1s"}} src={image} alt={"image of class " + image.toLowerCase()} />
        </section>
    );
}

export const Landing = () => {
    return (
        <>
            <Baner />
            <Box sx={{ marginTop: "100px" }}>
                <Subtitle title="Transforma tu sudor en éxito y tus metas en realidad en nuestro gimnasio." size="28px" width="40%" />
                <BoxPersonInfo genere="Mujer" side="right" />
                <Box sx={{ width: "100%", height: "10px", background: "black" }}></Box>
                <BoxPersonInfo genere="Hombre" side="left" />
                <GridLayout gap={0} columns={4}>
                    <ClassTraining title="Funcional" image={classe1}/>
                    <ClassTraining title="Spinning" image={classe2}/>
                    <ClassTraining title="Yoga" image={classe3}/>
                    <ClassTraining title="Full Body" image={classe4}/>
                </GridLayout>
            </Box>
        </>
    )
}
