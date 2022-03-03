import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      errors: {},
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Passa o state inteiro para o state do componente pai
    const { addNew } = this.props;
    if (this.validateForm()) {
      // addNew(this.state);

      // reset state
      this.state = {
        nome: '',
        email: '',
        cpf: '',
        endereco: '',
      };
    }
    console.log(this.state);
  }

    validateForm = () => {
      const { nome, email, cpf, endereco } = this.state;
      const erros = {};
      let formIsValid = true;

      if (!nome.length || nome.length > 40) {
        formIsValid = false;
        erros.name = '*Nome deve ser preenchido com no máximo 40 caracteres';
      } 

      if (!email.length || email.length > 30) {
        formIsValid = false;
        erros.email = '*Email deve ser preenchido com no máximo 30 caracteres';
      } 

      if (!cpf.length || cpf.length > 11) {
        formIsValid = false;
        erros.cpf = '*CPF deve ser preenchido com no máximo 11 caracteres';
      } 

      if (!endereco.length || endereco.length > 200) {
        formIsValid = false;
        erros.endereco = '*Endereço deve ser preenchido com no máximo 200 caracteres';
      } 

      this.setState({
        errors: erros,
      });

      return formIsValid;
    }

  render() {
    const {
      state: {nome, email, cpf, endereco, errors}, 
      handleSubmit,
    } = this;
    return (
      <form className="new-topic-form" onSubmit={ handleSubmit }>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="nome"
            id="nome"
            value={ nome.toUpperCase() }
            onChange={ this.handleChange }
            required
          />
        </label>
        <span className="error">{errors.name}</span>

        <label htmlFor="email">
        Email
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
        </label>
        <span className="error">{errors.email}</span>

        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={ cpf }
            onChange={ this.handleChange }
            required
          />
        </label>
        <span className="error">{errors.cpf}</span>

        <label htmlFor="endereco">
          Endereço
          <input
            type="text"
            name="endereco"
            id="endereco"
            value={ endereco }
            onChange={ this.handleChange }
            required
          />
        </label>
        <span className="error">{errors.endereco}</span>


        {/* <label htmlFor="projectFinished">
          Projeto foi finalizado?
          <input
            id="projectFinished"
            type="checkbox"
            name="projectFinished"
            value={ projectFinished }
            onChange={ this.handleChange }
          />
        </label> */}
        <button
          type="submit"
          // disabled={ btnDisabled }
        >
          Teste

        </button>
      </form>
    );
  }
}

export default Form;
