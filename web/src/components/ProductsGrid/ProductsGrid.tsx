import React from 'react'
import uuid from 'uuid'

import ProductBox from './ProductBox'

interface ProductGridProps {
  products?: Product[]
}

export interface Product {
  imgSrc: string
  imgSize?: 1 | 2
}

const ProductsGrid: React.FC<ProductGridProps> = (props) => {
  return (
    <div className='product-grid'>
      {props.products
        ? props.products.map((product) => (
            <ProductBox
              imgSrc={product.imgSrc}
              key={uuid.v4()}
              size={product.imgSize}
            />
          ))
        : null}
    </div>
  )
}

export default ProductsGrid
