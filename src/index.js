import React from "react"
import { createRoot } from "react-dom/client"
import Prenda from "./componentes/Prenda"
import Tipoprenda from "./componentes/Tipoprenda"
import "bootstrap/dist/css/bootstrap.css"

const elemento = (<div>
                    <div><Tipoprenda/></div>
                    <div><Prenda/></div>
                </div>)

const container = document.getElementById("root")
const root = createRoot(container)

root.render(elemento)
