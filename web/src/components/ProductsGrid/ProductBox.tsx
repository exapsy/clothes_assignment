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
  }

  const boxWidth = !props.size || props.size === 1 ? '300px' : '600px'
  return (
    <div
      className='product-grid__box'
      style={{ width: boxWidth }}
      onClick={handleClick}
    >
      <img className='product-grid__box__image' src={props.imgSrc} />
      <div className='product-grid__box__overlay'>Shop now</div>
      <Modal open={modalOpen}>
        <Modal.Image src={props.imgSrc} />
        <Modal.Content></Modal.Content>
      </Modal>
    </div>
  )
}

export default ProductBox
