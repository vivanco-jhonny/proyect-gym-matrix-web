import { Route } from "react-router-dom";
import { Private } from "../../routes/routes";
import Notfound from "../public/Notfound";
import { Main as ClientMain } from "./client/Main";
import { Main as AdminMain } from "./admin/Main";

export const Main = () => {
    return (
        <>
            <Notfound>
                <Route path={`${Private.Admin.Main}/*`} element={<AdminMain/>} />
                <Route path={`${Private.Client.Main}/*`} element={<ClientMain/>} />
            </Notfound>
        </>
    );
}