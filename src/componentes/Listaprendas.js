import React from "react";
import Prenda from "./Prenda";

function Listaprendas(props)
{
    return(
        <div>
            {props.detalleprenda.map((reporte) => {
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
    )
}

export default Listaprendas