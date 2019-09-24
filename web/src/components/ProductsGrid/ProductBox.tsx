import React from 'react'

import { Modal } from '../Modal'

interface ProductBoxProps {
  size?: 1 | 2
  imgSrc: string
}

const ProductBox: React.FC<ProductBoxProps> = (props) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setModalOpen(true)
    console.log(modalOpen)
  }

  const handleModalHide = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setModalOpen(false)
    console.log(modalOpen)
  }

  const boxWidth =
    !props.size || props.size === 1 ? '300px !important' : '400px !important'

  return (
    <li className='product-grid__box' style={{ maxWidth: boxWidth }}>
      <div onClick={handleClick} className='product-grid__box__container'>
        <img className='product-grid__box__image' src={props.imgSrc} />
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
