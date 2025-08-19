import React from "react";

class Altaprenda extends React.Component
{
    constructor()
    {
        super();
        this.state={
            numero1:0,
            numero2:0,
            total:0,
            tipo:"",
            status:"",
            genero:""
        }
        this.valoresformulario=this.valoresformulario.bind(this);
        this.calculatotal=this.calculatotal.bind(this);
    }
    valoresformulario=({name,value})=>{
        this.setState(()=>{
            return{[name]:value};
        });
    };
    calculatotal(e)
    {
        if(this.state.tipo === "A"){
            this.setState({total:parseInt(this.state.numero1) * parseInt(this.state.numero2) + 100})
        }
        else{
            this.setState({total:parseInt(this.state.numero1) * parseInt(this.state.numero2) + 300})
        }

        switch(this.state.numero1)
        {
            case "7":
                return this.setState({status:"Buena compra"})
            break;
            default:
                return this.setState({status:"Mala compra"})
            break;
        }
    }
    render(){
        return(
            <div>
                <div>
                    <pre>{JSON.stringify(this.state,null,2)}</pre>
                </div>
                <div>
                    Tecle numero de prendas: <input type="text" name="numero1" onKeyUp={event=>this.valoresformulario(event.target)}/>
                </div>
                <div>
                    Precio de prendas: <input type="text" name="numero2" onKeyUp={event=>this.valoresformulario(event.target)}/>
                </div>
                <div>
                    Tipo: <select name="tipo" onChange={event=>this.valoresformulario(event.target)}>
                        <option value={"A"}>A</option>
                        <option value={"B"}>B</option>
                        <option value={"C"}>C</option>
                    </select>
                </div>
                <div>
                    Genero: <input type="radio" name="genero" value={"H"} onChange={event=>this.valoresformulario(event.target)}/> Hombre
                    <input type="radio" name="genero" value={"M"} onChange={event=>this.valoresformulario(event.target)}/> Mujer
                </div>
                <div>
                    <input type="submit" value="calcula" onClick={this.calculatotal}/>
                </div>
                <div>
                    Total: <input type="text" name="total" value={this.state.total}/>
                </div>
                <div>
                    Tipo de compra: <input type="text" name="tipocompra" value={this.state.status} disabled/>
                </div>
        </div>
        )
    }
}

export default Altaprenda