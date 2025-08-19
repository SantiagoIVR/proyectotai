import React, { Component } from "react";
import "./estilos/formavalidad.css";

const modeloRegex = RegExp(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/);     
const materialRegex = RegExp(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/);    
const precioRegex = RegExp(/^\d+(\.\d{1,2})?$/);              
const cantidadRegex = RegExp(/^[0-9]+$/);                     
const observacionesRegex = RegExp(/^.{0,200}$/);              

const formValid = ({errores}) => {
    let valid = true;
    Object.values(errores).forEach(val=>{val.length>0 && (valid=false);})
    return valid;
}

class Formulariovalidacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelo: "",
      categoria: "",
      talla: "",
      color: "",
      material: "",
      precio: "",
      cantidad: "",
      observaciones: "",
      statusform:"",
      errores: {
        modelo: "",
        categoria: "",
        talla: "",
        color: "",
        material: "",
        precio: "",
        cantidad: "",
        observaciones: ""
      }
    };
  }

  handleChange = (e) => {
  const { name, value } = e.target;
  let errores = { ...this.state.errores };

    switch (name) {
        case "modelo":
        errores.modelo = modeloRegex.test(value)
            ? ""
            : "Se requiere un modelo válido (solo letras y espacios).";
        break;

        case "categoria":
        errores.categoria = value === "" ? "Seleccione una categoría" : "";
        break;

        case "talla":
        errores.talla = value === "" ? "Seleccione una talla" : "";
        break;

        case "color":
        errores.color = value === "" ? "Seleccione un color" : "";
        break;

        case "material":
        errores.material = materialRegex.test(value)
            ? ""
            : "El material debe contener solo letras (mínimo 3 caracteres).";
        break;

        case "precio":
        errores.precio = precioRegex.test(value)
            ? ""
            : "Ingrese un precio válido (ej. 199.99)";
        break;

        case "cantidad":
        errores.cantidad = cantidadRegex.test(value)
            ? ""
            : "Ingrese una cantidad válida (solo enteros positivos).";
        break;

        case "observaciones":
        errores.observaciones = observacionesRegex.test(value)
            ? ""
            : "Las observaciones no deben superar los 200 caracteres.";
        break;

        default:
        break;
  }

  this.setState({
    errores,
    [name]: value,
  });
};

handleSubmit =e=>{
    e.preventDefault();

    if(formValid(this.state))
    {
        this.setState({statusform:"Formulario Valido"})
    }
    else
    {
        this.setState({statusform:"La informacion no es correcta"})
    }
}

  render() {
    const { errores } = this.state;

    return (
      <div>
        <h3>Alta de playera</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              Modelo:{" "}
              <input
                type="text"
                className={errores.modelo.length > 0 ? "error" : null}
                name="modelo"
                placeholder="Ej. Oversize"
                onKeyUp={this.handleChange}
              />
              {errores.modelo.length > 0 && (
                <span className="errorMessage">{errores.modelo}</span>
              )}
            </div>

            <div>
              Categoria:
              <input
                type="radio"
                name="categoria"
                value={"H"}
                onChange={this.handleChange}
              />
              Hombre
              <input
                type="radio"
                name="categoria"
                value={"M"}
                onChange={this.handleChange}
              />
              Mujer
              {errores.categoria.length > 0 && (
                <span className="errorMessage">{errores.categoria}</span>
              )}
            </div>

            <div>
              Talla:
              <select name="talla" onChange={this.handleChange}>
                <option value={""}>Seleccione una talla</option>
                <option value={"XS"}>XS</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
              </select>
              {errores.talla.length > 0 && (
                <span className="errorMessage">{errores.talla}</span>
              )}
            </div>

            <div>
              Color:
              <select name="color" onChange={this.handleChange}>
                <option value={""}>Seleccione un color</option>
                <option value={"Negra"}>Negra</option>
                <option value={"Blanca"}>Blanca</option>
                <option value={"Morada"}>Morada</option>
                <option value={"Verde"}>Verde</option>
                <option value={"Azul"}>Azul</option>
              </select>
              {errores.color.length > 0 && (
                <span className="errorMessage">{errores.color}</span>
              )}
            </div>

            <div>
              Material:{" "}
              <input
                type="text"
                name="material"
                placeholder="Ej. Algodón"
                onKeyUp={this.handleChange}
              />
              {errores.material.length > 0 && (
                <span className="errorMessage">{errores.material}</span>
              )}
            </div>

            <div>
              Precio:{" "}
              <input
                type="text"
                name="precio"
                step="0.01"
                placeholder="Ej. 250.00"
                onKeyUp={this.handleChange}
              />
              {errores.precio.length > 0 && (
                <span className="errorMessage">{errores.precio}</span>
              )}
            </div>

            <div>
              Cantidad:{" "}
              <input
                type="text"
                name="cantidad"
                placeholder="Ej. 50"
                onKeyUp={this.handleChange}
              />
              {errores.cantidad.length > 0 && (
                <span className="errorMessage">{errores.cantidad}</span>
              )}
            </div>

            <div>
              Observaciones:{" "}
              <textarea
                name="observaciones"
                onKeyUp={this.handleChange}
              ></textarea>
              {errores.observaciones.length > 0 && (
                <span className="errorMessage">{errores.observaciones}</span>
              )}
            </div>

            <div>
              <button type="submit">Registrar Playera</button>
            </div>
            <div>
                <p>{this.state.statusform}</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulariovalidacion;
