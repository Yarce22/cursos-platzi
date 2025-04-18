import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './style.css'

const Modal = ({ children }) => {
  return createPortal (
    <div className='ModalBackground'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

Modal.propTypes = {
  children: PropTypes.node
}

export { Modal }