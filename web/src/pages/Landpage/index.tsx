import React from 'react'

import { ProductsGrid } from '../../components/ProductsGrid'
import { Product } from '../../components/ProductsGrid/ProductsGrid'

const Landpage: React.FC = () => {
  const createProduct = (imgSrc: string, imgSize: 1 | 2): Product => {
    return {
      imgSrc,
      imgSize,
    }
  }
  const products: Product[] = [
    createProduct(
      'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/0/30367951129_3.jpg',
      1,
    ),
    createProduct(
      'https://zakcretcdn.r.worldssl.net/eshop/image/data/20190913/kids-500x200.jpg',
      2,
    ),
    createProduct(
      'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/0/30336151167_3.jpg',
      1,
    ),
    createProduct(
      'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/0/30000062500_3.jpg',
      1,
    ),
  ]

  return (
    <div className='Landpage'>
      <ProductsGrid products={products} />
    </div>
  )
}

export default Landpage
