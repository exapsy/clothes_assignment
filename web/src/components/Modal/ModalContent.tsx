import React from 'react'

export interface ModalContentProps {}

const ModalContent: React.FC<ModalContentProps> = (props) => {
  return <div className='modal__content'>{props.children}</div>
}

export default ModalContent
