//Se crean las rutas de pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Producto from "../pages/Producto";
import Contacto from "../pages/Contacto";

function AppRouter() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/producto" element={<Producto />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>

    );
}

  export default AppRouter;