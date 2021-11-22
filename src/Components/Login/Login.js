import React, { Component } from "react";
import "../../App.css";
import { credentials } from "../../db";
import { urlHome } from "../../BackEnd";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      recoverPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRecoverClick = this.handleRecoverClick.bind(this);
    this.recoverContrasena = this.recoverContrasena.bind(this);
    this.handleToUpdate = this.props.updateLogStateLOGIN;
  }

  async handleChange(e) {
    if (e.target.name == "password") {
      await this.setState({ password: e.target.value });
    } else if (e.target.name == "email") {
      await this.setState({ email: e.target.value });
    } else if (e.target.name == "username") {
      await this.setState({ username: e.target.value });
    }
    
  }

  async handleChange2(e) {
    if (e.target.name == "email") {
      await this.setState({ email: e.target.value });
    }
    
  }

  async handleRecoverClick(e) {
    if (e.target.name == "cancelar") {
      await this.setState({
        username: "",
        password: "",
        recoverPassword: false,
      });
    } else {
      //verificar si el correo esta registrado
      //Logica de enviar correo,
      //se manda peticion a backends y backend envia correo
      alert("El correo de verificacion se ha enviado");
      await this.setState({
        username: "",
        password: "",
        recoverPassword: false,
      });
    }
  }

  async recoverContrasena(e) {
    await this.setState({ recoverPassword: true });
    console.log(this.state);
    e.target.value = "";
  }

  async handleClick(e) {
    let thisReference = this;
    let name = "";
    let isValidCredentials = false;
    if (this.state.username.length < 3 || this.state.password.length < 4) {
      alert("Usuario y contrasena deben de tener mas de 3 caracteres");
      return;
    }

    let data = {
      user: {},
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    };
    let response = await axios.post(urlHome + "credential", data);
    console.log(response);
    isValidCredentials = response.data.length == 1;
    if (isValidCredentials) {
      alert("Login exitoso");
      this.handleToUpdate(true, this.state.username, response.data[0].nombre);
    } else {
      alert("Usuario y/o contrasena equivocadas.");
      this.handleToUpdate(false, "", "");
    }
  }

  renderLogin() {
    return (
      <div className="App">
        <header className="App-header">
          <form className="form-container">
            <label>Nombre Usuario</label>
            <br />

            <input
              name="username"
              type="text"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <br />
            <label>Contrasena</label>
            <br />
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <br />
            <input
              type="button"
              onClick={this.recoverContrasena}
              value="Recuperar Contrasena"
            />
            <input type="button" onClick={this.handleClick} value="Entrar" />
          </form>
        </header>
      </div>
    );
  }

  renderRecoverLogin() {
    return (
      <div className="App">
        <header className="App-header">
          <form className="form-container">
            <label>Por favor introduzca su correo electronico</label>
            <br />
            <input
              name="email"
              type="email"
              onChange={this.handleChange2}
              value={this.state.email}
            />
            <br />
            <input
              type="button"
              onClick={this.handleRecoverClick}
              name="cancelar"
              value="Cancelar"
            />
            <input
              type="button"
              onClick={this.handleRecoverClick}
              name="recuperar"
              value="Env. Email"
            />
          </form>
        </header>
      </div>
    );
  }

  render() {
    if (!this.state.recoverPassword) {
      return this.renderLogin();
    } else {
      return this.renderRecoverLogin();
    }
  }
}
