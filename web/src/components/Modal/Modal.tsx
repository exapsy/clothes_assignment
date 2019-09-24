import React from 'react'

import ModalContent, { ModalContentProps } from './ModalContent'
import ModalImage, { ModalImageProps } from './ModalImage'

interface ModalProps {
  open?: boolean
  handleHide?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IModal<T> extends React.FC<T> {
  Image: React.FC<ModalImageProps>
  Content: React.FC<ModalContentProps>
}

const Modal: IModal<ModalProps> = (props) => {
  const handleHide = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (props.handleHide) {
      props.handleHide(e)
    }
  }

  return (
    <div
      className={`
          modal
          ${!props.open ? 'modal_closed' : ''}
          `}
    >
      <div className='modal__window'>
        <button className='modal__exit-button' onClick={handleHide}>
          x
        </button>
        {props.children}
      </div>
      <div className='modal__overlay'></div>
    </div>
  )
}

Modal.Image = ModalImage
Modal.Content = ModalContent

export default Modal
