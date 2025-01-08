import { Component } from "react";
import PropTypes from "prop-types";

const SECURITY_CODE = 'paradigma'

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false,
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (this.state.value.toLowerCase() !== SECURITY_CODE) {
          this.setState({ error: true }) 
          this.setState({ loading: false })
        } else {
          this.setState({ loading: false })
        }
      }, 2000)
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el código de seguridad</p>

        {this.state.error && (
          <p>Error: El código es incorrecto</p>
        )}
        {this.state.loading && (
          <p>Cargando...</p>
        )}

        <input
          value={this.state.value}
          placeholder="Código de seguridad"
          onChange={(event) => {
            this.setState({ value: event.target.value })
          }}
        />
        <button
          onClick={() => (this.setState({loading: true, error: false}))}
        >Comprobar</button>
      </div>
    )
  }
}

ClassState.propTypes = {
  name: PropTypes.string
}

export { ClassState }
