import { Link, Route } from "react-router-dom";
import Notfound from "../../../public/Notfound";
import { Private } from "../../../../routes/routes";
import { Create } from "./Create";
import { ReadAll } from "./ReadAll";
import { Search } from "./Search";
import { useState } from "react";
import { Button, SxProps } from "@mui/material";
import { Container } from "@utils/components/Utils";
import imgproducts from "../../../../../public/multimedia/img-gym-products.jpg"

export const Main = () => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const boxstyle: SxProps = {
        width: "100%",
        height: "100%",
        border: "none",
        background: "black",
        color: "white",
        fontFamily: "kanit",
        borderRadius: "20px",
        "&:hover": {
            background: "black"
        },
        "label": {
            fontWeight: "700",
            fontSize: "24px",
        },
        "i": {
            fontSize: "32px",
            color: "white",
            marginRight: "10px"
        }
    }

    const boxstyleinfo: SxProps = {
        width: "100%",
        height: "100%",
        border: "none",
        background: "black",
        color: "white",
        fontFamily: "kanit",
        borderRadius: "20px",
        "&:hover": {
            background: "black"
        },
        "h1": {
            position: "absolute",
            top: "25px",
            left: "30px",
            fontSize: "14px",
            fontWeight: "300"
        },
        "label": {
            position: "absolute",
            top: "48px",
            left: "30px",
            fontWeight: "900",
            fontSize: "36px",
        },
        "i": {
            position: "absolute",
            fontSize: "64px",
            color: "0px",
            top: "25px",
            right: "48px"
        },
        "h6": {
            position: "absolute",
            fontSize: "12px",
            fontWeight: "700",
            color: "0px",
            bottom: "15px",
            left: "30px"
        }
    }

    return (
        <div>
            <img src={imgproducts} alt="fasd" style={{width: "100%", border: "black", marginTop: "0px", boxShadow: "0px 2px 0px rgba(0,0,0,1)"}} />
            <div style={{ position: "relative", width: "100%", display: "grid", height: "240px", top: "20px", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "160px 80px", gap: "20px" }}>
                <Button sx={boxstyleinfo}>
                    <i className="bi bi-plus-slash-minus"></i>
                    <h1>Cantidad de productos en stock:</h1>
                    <label>Stock: 1834/u</label>
                    <h6>Total de Productos x stock</h6>
                </Button>
                <Button sx={boxstyleinfo}>
                    <i className="bi bi-currency-dollar"></i>
                    <h1>Producto con mayor precio:</h1>
                    <label>S/. 159.90</label>
                    <h6>Creatina Forzeben 400g</h6>
                </Button>
                <Button sx={boxstyleinfo}>
                    <i className="bi bi-cash-coin"></i>
                    <h1>Total Precio:</h1>
                    <label>S/. 10689.90</label>
                    <h6>Stock de productos x Precio + IGV</h6>
                </Button>
                <Link to={Private.Admin.Products.Create} onClick={() => { setVisibility(!visibility) }}>
                    <Button sx={boxstyle}>
                        <i className="bi bi-plus-square-dotted"></i>
                        <label>Agregar Producto</label>
                    </Button>
                </Link>
                <Link to={Private.Admin.Products.ReadAll} onClick={() => { setVisibility(!visibility) }}>
                    <Button sx={boxstyle}>
                        <i className="bi bi-sort-alpha-up"></i>
                        <label>Listar y Ordenar</label>
                    </Button>
                </Link>
                <Link to={Private.Admin.Products.Search} onClick={() => { setVisibility(!visibility) }}>
                    <Button sx={boxstyle}>
                        <i className="bi bi-funnel"></i>
                        <label>Filtrar Producto</label>
                    </Button>
                </Link>
            </div >
            <div style={{ position: "absolute", zIndex: "5", top: "0px", background: "rgb(255,230,0)", height: "calc(100% + 200px)", left: "0px", visibility: visibility ? "visible" : "hidden", width: "100%", display: visibility ? "block" : "none" }}>
                <button style={{position: "absolute", left: "50%", transform: "translateX(-50%)", background: "none", border: "none", color: "black", fontSize: "32px"}} onClick={() => { setVisibility(false) }}> <i className="bi bi-x-circle"></i> </button>
                <div style={{ paddingTop: "50px", paddingBottom: "100px", background: "rgb(255,230,0)" }}>
                    <Container margin={0}>
                        <Notfound>
                            <Route path={Private.Admin.Products.Create} element={<Create />} />
                            <Route path={Private.Admin.Products.ReadAll} element={<ReadAll />} />
                            <Route path={Private.Admin.Products.Search} element={<Search />} />
                        </Notfound>
                    </Container>
                </div>
            </div>
        </div >
    );
}
