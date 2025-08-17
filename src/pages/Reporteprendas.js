import React from "react";
import Prenda from "../componentes/Prenda"
import Tipoprenda from "../componentes/Tipoprenda"

class Reporteprendas extends React.Component{
    render(){
        return(<div>
            <div><Tipoprenda
                tipo="Overzise"/></div>
                <div><Prenda
                color="Roja"
                talla="M"
                escribe="Escribe algo..."
                foto="fotos/playeraroja.jpeg"
                colorfondo="Blue"/></div>
        </div>)
    }
}

export default Reporteprendas