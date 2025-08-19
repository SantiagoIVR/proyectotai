import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Altaprenda from "../pages/Altaprenda";
import Reporteprendas from "../pages/Reporteprendas";
import Noexiste from "../pages/Noexiste";
import Infoprenda from "../pages/Infoprenda";
import Formulario from "../pages/Formulario"

function Tiendaropa()
{
    return(
        <BrowserRouter>  
            <Switch>
                <Route exact path="/Alta" component={Altaprenda}/>
                <Route exact path="/Reporte" component={Reporteprendas}/>
                <Route exact path="/Prenda" component={Infoprenda}/>
                <Route exact path="/Formulario" component={Formulario}/>
                <Route component={Noexiste}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Tiendaropa