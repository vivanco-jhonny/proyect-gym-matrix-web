import { Suspense } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Login } from "./pages/public/Login"
import { Main as PublicMain } from "./pages/public/Main"
import Notfound from "./pages/public/Notfound"
import { Register } from "./pages/public/Register"
import { Private, Public } from "./routes/routes"
import { Main as PrivateMain } from "./pages/private/Main"

function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <Notfound>
            <Route path="/" element={<Navigate to={Public.Main} />} />
            <Route path={Public.Login} element={<Login />}/>
            <Route path={Public.Register} element={<Register />}/>
            <Route path={`${Public.Main}/*`} element={<PublicMain />} />
            <Route path={`${Private.Main}/*`} element={<PrivateMain />} />
          </Notfound>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
