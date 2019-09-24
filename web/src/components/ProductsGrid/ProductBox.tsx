import React from 'react'

interface ProductBoxProps {
  size?: 1 | 2
  imgSrc: string
}

const ProductBox: React.FC<ProductBoxProps> = (props) => {
  const boxWidth = !props.size || props.size === 1 ? '300px' : '500px'
  return (
    <div className='product-grid__box' style={{ width: boxWidth }}>
      <img className='product-grid__box__image' src={props.imgSrc} />
      <div className='product-grid__box__overlay'>Shop now</div>
    </div>
  )
}

export default ProductBox
