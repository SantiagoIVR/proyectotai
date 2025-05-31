import React from "react"
import { createRoot } from "react-dom/client"

const mensaje = <div>Hola TIC</div>
const container = document.getElementById("root")
const root = createRoot(container)

root.render(mensaje)
