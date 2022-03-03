import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './NewProject.css';

class NewProject extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      level: 0,
      thumbnail: '',
      projectFinished: false,
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      addNew(this.state);

      // reset state
      this.setState({
        title: '',
        level: 0,
        thumbnail: '',
        projectFinished: false,
      });
    }
    console.log(this.state);
  }

    validateForm = () => {
      const { title, level } = this.state;
      console.log(typeof (level));
      const erros = {};
      let formIsValid = true;

      if (!title.length) {
        formIsValid = false;
        erros.title = '*Preencha o título do projeto';
      }

      if (level > 5) {
        formIsValid = false;
        erros.level = '*Apenas números de 1 a 5 suportados';
      }

      this.setState({
        errors: erros,
      });

      return formIsValid;
    }

    render() {
      const {
        state: {
          title, level, thumbnail, projectFinished, errors, btnDisabled,
        }, handleSubmit,
      } = this;
      return (
        <form className="new-topic-form" onSubmit={ handleSubmit }>
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              id="title"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <span className="error">{errors.title}</span>
          <label htmlFor="level">
            Level:
            <input
              type="number"
              // min="1"
              // max="5"
              name="level"
              value={ level }
              onChange={ this.handleChange }
            />
          </label>
          <span className="error">{errors.level}</span>
          <label htmlFor="thumbnail">
            Image url:
            <input
              type="text"
              name="thumbnail"
              id="thumbnail"
              value={ thumbnail }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="projectFinished">
            Projeto foi finalizado?
            <input
              id="projectFinished"
              type="checkbox"
              name="projectFinished"
              value={ projectFinished }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ btnDisabled }
          >
            Adicionar tópico

          </button>
        </form>
      );
    }
}
NewProject.propTypes = {
  addNew: PropTypes.func.isRequired,
};

export default NewProject;
