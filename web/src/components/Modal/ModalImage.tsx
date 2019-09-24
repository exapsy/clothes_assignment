import React from 'react'

export interface ModalImageProps {
  src: string
}

const ModalImage: React.FC<ModalImageProps> = (props) => {
  return <img className='modal__image' src={props.src} alt='productImage' />
}

export default ModalImage
