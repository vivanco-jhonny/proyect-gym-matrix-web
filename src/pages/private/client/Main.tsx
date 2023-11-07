import { Navigate, Route, useNavigate } from "react-router-dom";
import { Private } from "../../../routes/routes";
import { Home } from "./Home";
import { useUserStore } from "../../../store/UserSessionStore";
import { Avatar, ButtonBase, Divider, IconButton, ListItemIcon, Menu, MenuItem, SxProps } from "@mui/material";
import { useState, useEffect } from "react";
import Notfound from "../../public/Notfound";
import { MyAccount } from "./MyAccount";
import { Container } from "../../../utils/components/Utils";
import { useUserDataStore } from "../../../store/UserDataStore";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";


export const Main = () => {
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();
    const datauser = useUserDataStore((state) => state.user);
    const setuser = useUserDataStore((state) => state.setuser);
    useEffect(() => {
        setuser(user ? user.uid : "")
    }, [user])
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const StyleButtonMenu: SxProps = {
        width: "100%",
        height: "100%",
        background: "rgb(255,230,0)",
        border: "none",
        color: "black",
        fontFamily: "kanit",
        fontSize: "20px",
        fontWeight: "800"
    }
    return (
        <>
            <div>
                <div style={{ position: "fixed", left: "0px", top: "0px", width: "150px", zIndex: "20", background: "rgb(0,0,0,0.1)", height: "100%", display: "grid", gridTemplateRows: "repeat(6, 1fr)", boxShadow: "0px 0px 2px black" }}>
                    <ButtonBase sx={StyleButtonMenu}><i style={{ fontSize: "32px" }} className="bi bi-person-circle"></i></ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i style={{ fontSize: "32px" }} className="bi bi-house-door"></i></ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i style={{ fontSize: "32px" }} className="bi bi-calendar4"></i></ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i style={{ fontSize: "32px" }} className="bi bi-activity"></i></ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i style={{ fontSize: "32px" }} className="bi bi-clipboard2-plus"></i></ButtonBase>
                    <ButtonBase sx={StyleButtonMenu}><i style={{ fontSize: "32px" }} className="bi bi-ticket-perforated"></i></ButtonBase>
                </div>
                <div style={{ width: "calc(100% - 150px)", boxShadow: "0px 0px 2px black", zIndex: "10", position: "fixed", top: 0, left: "150px", height: "80px", background: "rgb(255,230,0, 0.1)", backdropFilter: "blur(20px)", paddingTop: "20px", paddingLeft: "20px" }}>
                    <label style={{ fontSize: "24px", fontWeight: "600", color: "black" }}>¡Hola! <label style={{ fontSize: "24px", fontWeight: "300", color: "black", textTransform: "capitalize" }}>{` ${datauser?.name} ${datauser.lastname}`}</label> </label>
                    <div style={{ position: "absolute", right: "40px", top: "15px", background: "transparent", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
                        <IconButton sx={{ width: "50px", height: "50px", color: "black" }}>
                            <i className="bi bi-chat-dots"></i>
                        </IconButton>
                        <IconButton sx={{ width: "50px", height: "50px", color: "black" }}>
                            <i className="bi bi-bell"></i>
                        </IconButton>
                        <IconButton sx={{ width: "50px", height: "50px", color: "black" }} onClick={handleClick}>
                            <Avatar sx={{ bgcolor: "black" }}></Avatar>
                        </IconButton>
                    </div>
                </div>
                <div style={{marginLeft: "150px", marginTop: "80px"}}>
                    <Container margin={20}>
                        <Notfound>
                            <Route path="/" element={<Navigate to={Private.Client.Home} />} />
                            <Route path={Private.Client.Home} element={<Home />} />
                            <Route path={Private.Client.Account} element={<MyAccount />} />
                        </Notfound>
                    </Container>
                </div>
                <div style={{ position: "fixed", right: "0px", top: "50%", transform: "transalteY(-50%)", width: "30px", height: "45px", background: "black" }}>
                    <i className="bi bi-chevron-compact-left" style={{ color: "white", fontSize: "32px" }}></i>
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
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Mi cuenta matrix premium
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => {handleClose(), signOut(auth).then(() => {navigate("/login")})}}>
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
