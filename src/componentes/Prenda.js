import React from "react"
import "./estilos/Prenda.css"

class Prenda extends React.Component{
    render(){
        const {foto, colorfondo, color, talla, escribe} = this.props
        return (<div className="ficha">
                    <div className="bordeazul">
                        <div className="divfoto">
                            <img src={foto} className="fotito" alt="hola"/>
                        </div>
                        <div className="infoprenda" style={{
                            backgroundColor: `${colorfondo}`
                        }}>
                            <div className="detalle">
                                Color: {color}
                            </div>
                        </div>
                        <div className="alert alert-primary" role="alert">
                            Playera de talla: {talla}
                            <input type="text" className="form-control" placeholder={escribe}/>
                        </div>
                        <div>
                            <button type="button" className="btn btn-success">Aceptar</button>
                        </div>
                    </div>
                </div>)
    }
}

export default Prenda