import React from "react"
import fotoplayera from "../fotos/playeraroja.jpeg"
import "./estilos/Prenda.css"

class Prenda extends React.Component{
    render(){
        return (<div className="ficha">
                    <div className="bordeazul">
                        <div className="divfoto">
                            <img src={fotoplayera} className="fotito" alt="hola"/>
                        </div>
                        <div className="infoprenda">
                            <div className="detalle">
                                Playera roja
                            </div>
                        </div>
                        <div className="alert alert-primary" role="alert">
                            Tienda de playeras
                            <input type="text" className="from-control" placeholder="Playera"/>
                        </div>
                        <div>
                            <button type="button" className="btn btn-success">Aceptar</button>
                        </div>
                    </div>
                </div>)
    }
}

export default Prenda