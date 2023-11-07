import { Route, Routes } from "react-router-dom";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Notfound = ({children}: Props) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<h2>NOT FOUND</h2>}/>
        </Routes>
    )
}

export default Notfound;