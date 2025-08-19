import React from "react";
import Tipoprenda from "../componentes/Tipoprenda"
import Listaprendas from "../componentes/Listaprendas";

class Reporteprendas extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datos:[
                {
                    "modelo":"Overzise",
                    "foto":"fotos/playeraroja.jpeg",
                    "color":"Roja",
                    "talla":"M",
                    "colorfondo":"Green"
                },
                {
                    "modelo":"Slim",
                    "foto":"fotos/playerarosa.jpeg",
                    "color":"Rosa",
                    "talla":"S",
                    "colorfondo":"Blue"
                },
                {
                    "modelo":"Slim Fit",
                    "foto":"fotos/playeranegra.jpeg",
                    "color":"Negra",
                    "talla":"G",
                    "colorfondo":"Red"
                }
            ]
        }
    }
    render(){
        return(<div>
                <div>
                    <Tipoprenda
                    modelo="Overzise"/>
                </div>
                <div>
                    <a href="/Alta" className="btn btn-primary streched-link">Alta de prenda</a>
                </div>
                <div>
                    <Listaprendas
                        detalleprenda = {this.state.datos}
                    />
                </div>
            </div>)
    }
}

export default Reporteprendas