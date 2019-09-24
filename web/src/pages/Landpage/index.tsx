import React from 'react'

import { ProductsGrid } from '../../components/ProductsGrid'
import { Product } from '../../components/ProductsGrid/ProductsGrid'

const Landpage: React.FC = () => {
  const createProduct = (imgSrc: string): Product => {
    return {
      imgSrc,
    }
  }
  const products: Product[] = [
    // createProduct(
    //   'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/s/i/signature-twill-white-shirt.jpg',
    // ),
    // createProduct(
    //   'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/0/30007351100_3.jpg',
    // ),
    // createProduct(
    //   'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/0/30007951118_3.jpg',
    // ),
    createProduct(
      'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/0/30367951129_3.jpg',
    ),
    // createProduct(
    //   'https://staging-etonshirts.s3.amazonaws.com/media/shop_now/3000-00-catagory.jpg',
    // ),
    createProduct(
      'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/0/30336151167_3.jpg',
    ),
    createProduct(
      'https://staging-etonshirts.s3.amazonaws.com/media/catalog/product/cache/image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/0/30000062500_3.jpg',
    ),
  ]

  return (
    <div className='Landpage'>
      <ProductsGrid products={products} />
    </div>
  )
}

export default Landpage
