import React from "react";
import Prenda from "../componentes/Prenda"
import Tipoprenda from "../componentes/Tipoprenda"

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
                    {this.state.datos.map((reporte) => {
                        return(
                            <Prenda
                            color={reporte.color}
                            talla={reporte.talla}
                            escribe="Escribe algo..."
                            foto={reporte.foto}
                            colorfondo={reporte.colorfondo}/>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Reporteprendas