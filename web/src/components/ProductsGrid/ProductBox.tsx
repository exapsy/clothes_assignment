import React from 'react'

import { Modal } from '../Modal'

interface ProductBoxProps {
  imgSrc: string
}

const ProductBox: React.FC<ProductBoxProps> = (props) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setModalOpen(true)
  }

  const handleModalHide = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setModalOpen(false)
  }

  return (
    <li className='product-grid__box'>
      <div onClick={handleClick} className='product-grid__box__container'>
        <img
          className='product-grid__box__image'
          src={props.imgSrc}
          alt='Shop now'
        />
        <div className='product-grid__box__overlay'>Shop now</div>
      </div>
      <Modal open={modalOpen} handleHide={handleModalHide}>
        <Modal.Image src={props.imgSrc} />
        <Modal.Content></Modal.Content>
      </Modal>
    </li>
  )
}

export default ProductBox
