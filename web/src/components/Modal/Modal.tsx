import React from 'react'

import ModalContent, { ModalContentProps } from './ModalContent'
import ModalImage, { ModalImageProps } from './ModalImage'

interface ModalProps {
  open?: boolean
  handleHide?: () => void
}

interface IModal<T> extends React.FC<T> {
  Image: React.FC<ModalImageProps>
  Content: React.FC<ModalContentProps>
}

const Modal: IModal<ModalProps> = (props) => {
  return (
    <div
      className={`
          modal
          ${!props.open ? 'modal_closed' : ''}
          `}
    >
      <div className='modal__window'>{props.children}</div>
      <div className='modal__overlay'></div>
    </div>
  )
}

Modal.Image = ModalImage
Modal.Content = ModalContent

export default Modal
