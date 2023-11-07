import { SxProps, ButtonBase, IconButton, Avatar, Menu, MenuItem, Divider, ListItemIcon } from "@mui/material";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate, Route, Navigate, Link } from "react-router-dom";
import { auth } from "../../../Firebase";
import { Private } from "../../../routes/routes";
import { useUserStore } from "../../../store/UserSessionStore";
import Notfound from "../../public/Notfound";
import {Index as UserMain} from "./UserRaiz/Index";
import { Container } from "../../../utils/components/Utils";
import "./Main.css";
import { Main as ProductMain } from "./ProductRaiz/Index";

export const Main = () => {
    const user = useUserStore((state) => state.user);
    const [menufit, setMenufit] = useState<boolean>(true);
    const [mesagefit, setMesagefit] = useState<boolean>(false);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const StyleButtonMenu: SxProps = {
        width: "250px",
        height: "100%",
        background: "rgb(255,230,0)",
        border: "none",
        color: "black",
        textAlign: "left",
        display: "block",
        fontFamily: "kanit",
        fontSize: "18px",
        "i": {
            fontSize: "24px",
            marginLeft: "20px",
            marginRight: "20px"
        }

    }
    return (
        <>
            <div>
                <div style={{ position: "fixed", left: "0px", top: "0px", overflow: "hidden", width: menufit ? "250px" : "65px", zIndex: "20", background: "rgb(0,0,0,0.1)", height: "100%", display: "grid", gridTemplateRows: "repeat(11, 1fr)", boxShadow: "0px 0px 2px black", transition: "all 0.3s" }}>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-speedometer"></i>Dashboard</ButtonBase>
                    <Link to={Private.Admin.Users.Index}><ButtonBase sx={StyleButtonMenu}><i className="bi bi-people"></i>Usuarios</ButtonBase></Link>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-calendar4"></i>Horarios</ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-person-vcard"></i>Empleados</ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-activity"></i>Actividades</ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-file-plus"></i>Planes</ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-ticket-perforated"></i>Menbresias</ButtonBase>
                    <Link to={Private.Admin.Products.Index}><ButtonBase sx={StyleButtonMenu}><i className="bi bi-tags"></i>Productos</ButtonBase></Link>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-credit-card"></i>Ventas</ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-graph-up"></i>Estadisticas</ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i className="bi bi-gear"></i>Configuaracion</ButtonBase>
                </div>
                <div style={{ width: menufit ? "calc(100% - 250px)" : "calc(100% - 80px)", transition: "all 0.3s", boxShadow: "0px 0px 2px black", zIndex: "10", position: "fixed", top: 0, left: menufit ? "250px" : "65px", height: "80px", background: "rgb(255,230,0, 0.5)", backdropFilter: "blur(20px)", paddingTop: "0px", paddingLeft: "0px" }}>
                    <label style={{ fontSize: "24px", fontWeight: "600", color: "black", height: "100%" }}><ButtonBase onClick={() => { setMenufit(!menufit) }} sx={{ paddingLeft: "20px", color: "black", paddingRight: "20px", height: "100%" }}><i className="bi bi-list"></i></ButtonBase>¡Hola! <label style={{ fontSize: "24px", fontWeight: "300", color: "black", textTransform: "capitalize" }}>{user?.displayName}</label> </label>
                    <div style={{ position: "absolute", left: "50%", width: "35%", transform: "translateX(-50%)", top: "18px" }}>
                        <div style={{ width: "100%", height: "46px", background: "none", position: "relative" }}>
                            <input type="text" style={{ width: "100%", borderRadius: "23px", height: "100%", background: "none", border: "solid 2px black", color: "black" }} className="textsearch" placeholder="Buscar..." />
                            <button style={{ position: "absolute", top: "4px", right: "10px", border: "none", background: "none" }}>
                                <i className="bi bi-search" style={{ fontSize: "24px" }}></i>
                            </button>
                        </div>
                    </div>
                    <div style={{ position: "absolute", right: "40px", top: "15px", background: "transparent", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
                        <IconButton onClick={() => {setMesagefit(!mesagefit)}} sx={{ width: "50px", height: "50px", color: "black" }}>
                            <i className="bi bi-chat-dots"></i>
                        </IconButton>
                        <IconButton sx={{ width: "50px", height: "50px", color: "black" }}>
                            <i className="bi bi-bell"></i>
                        </IconButton>
                        <IconButton sx={{ width: "50px", height: "50px", color: "black" }} onClick={handleClick}>
                            <Avatar sx={{ bgcolor: "black" }}>{user?.displayName?.charAt(0)}</Avatar>
                        </IconButton>
                    </div>
                </div>
                <div style={{ position: "absolute", height: "100%", top: "80px", marginLeft: menufit ? "250px" : "65px", width: menufit ? "calc(100% - 250px)" : "calc(100% - 65px)", marginTop: "0px", transition: "all 0.3s" }}>
                    <Container margin={0}>
                        <Notfound>
                            <Route path="/" element={<Navigate to={Private.Admin.Products.Index} />} />
                            <Route path={Private.Admin.Products.Index + "/*"} element={<ProductMain  />} />
                            <Route path={Private.Admin.Users.Index + "/*"} element={<UserMain />} />
                        </Notfound>
                    </Container>
                </div>
                <div style={{ position: "fixed", boxShadow: "0px 2px 2px black", transition: "all 0.3s", right: "0px", top: "80px", transform: "transalteY(-50%)", width: mesagefit ? "500px" : 0, height: "calc(100% - 80px)", background: "none" }}>
                    <div style={{ position: "relative", top: "0px", width: "100%", height: "100%", background: "rgba(255,230,0,0.5)", backdropFilter: "blur(50px)" }}>
                        <div style={{padding: "50px"}}>
                            <label style={{color: "black", fontSize: "24px"}}>Mensajes</label>
                        </div>
                    </div>
                </div>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            background: "rgb(255,230,0)",
                            filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,0.8))',
                            mt: 2,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'rgb(255,230,0 )',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <Divider />
                    <MenuItem onClick={() => { handleClose(), signOut(auth).then(() => { navigate("/login") }) }}>
                        <ListItemIcon>
                            <i className="bi bi-box-arrow-left" style={{ fontSize: "24px" }}></i>
                        </ListItemIcon>
                        Cerrar Sesion
                    </MenuItem>
                </Menu>
            </div>
        </>
    );
}