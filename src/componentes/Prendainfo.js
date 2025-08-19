import React from "react";

class Prendainfo extends React.Component
{
    state={}

    controlsubmit=e=>{
        e.preventDefault()
    }

    recibevalores=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render()
    {
        return(
            <div>
                <form>
                    <div>
                        Marca: <input type="text" name="maraca" onKeyUp={this.recibevalores}/>
                    </div>
                    <div>
                        Modelo: <input type="text" name="modelo" onKeyUp={this.recibevalores}/>
                    </div>
                    <div>
                        Corte: <select name="corte" onChange={this.recibevalores}> 
                            <option value={"Oversize"}>Oversize</option>
                            <option value={"Slim"}>Slim</option>
                            <option value={"SlimFit"}>SlimFit</option>
                        </select>
                    </div>
                    <div>
                        Genero: <input type="radio" name="genero" value={"M"} onChange={this.recibevalores}/> Masculino
                        <input type="radio" name="genero" value={"F"} onChange={this.recibevalores}/> Femenino
                    </div>
                    <input type="submit" value={"Transaferir"} onClick={this.controlsubmit}/>
                </form>
            </div>
        )
    }
}

export default Prendainfo