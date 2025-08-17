import React from "react"
import { createRoot } from "react-dom/client"
import Reporteprendas from "./pages/Reporteprendas"
import "bootstrap/dist/css/bootstrap.css"

const elemento = (<div><Reporteprendas/></div>)

const container = document.getElementById("root")
const root = createRoot(container)

root.render(elemento)
