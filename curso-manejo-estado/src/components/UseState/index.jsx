import PropTypes from "prop-types"
import { useEffect, useState } from "react"

const SECURITY_CODE = 'paradigma'

const UseState = ({ name }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    if (loading) {
      setError(false)
      setTimeout(() => {
        if (value.toLowerCase() !== SECURITY_CODE) {
          setError(true) 
        } else {
          setConfirmed(true)
        }
        setLoading(false)
      }, 2000)
    }
  }, [loading])

  if (!confirmed && !deleted) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
  
        <p>Por favor, escribe el código de seguridad</p>
  
        {error && (
          <p>Error: El código es incorrecto</p>
        )}
        {loading && (
          <p>Cargando...</p>
        )}
  
        <input
          value={value}
          placeholder="Código de seguridad"
          onChange={(event) => (
            setValue(event.target.value)
          )}
        />
        <button
          onClick={() => setLoading(true)}
        >Comprobar</button>
      </div>
    )
  } else if (!!confirmed && !deleted) {
    return (
      <div>
        <h2>Eliminar {name}</h2>

        <p>¿Estas seguro que desea eliminarlo?</p>

        <button
          onClick={() => setDeleted(true)}
        >Confirmar</button>
        <button
          onClick={() => {
            setValue('')
            setConfirmed(false)
          }}
        >Cancelar</button>
      </div>
    )
  } else {
    return(
      <div>
        <h2>El {name} fue eliminado con éxito</h2>

        <button
          onClick={() => {
            setDeleted(false)
            setConfirmed(false)
            setValue('')
          }}
        >Recuperar {name}</button>
      </div>
    )
  }
}

UseState.propTypes = {
  name: PropTypes.string
}

export { UseState }
