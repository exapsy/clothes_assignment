import './index.scss'

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
    createProduct(
      'https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/1/0/10000039725_st.jpg',
    ),
    createProduct(
      'https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/1/0/10000008471_st.jpg',
    ),
    createProduct(
      'https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/1/0/10000008471_st.jpg',
    ),
    createProduct(
      'https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/1/0/10000008471_st.jpg',
    ),
    createProduct(
      'https://cdn.etonshirts.com/media/shop_now/slim-fit-shirts-white-190911-cat.jpg',
    ),
    createProduct(
      'https://cdn.etonshirts.com/dyn/media/catalog/product/9/8/98008458026_st/337x/soft_lightweight_denim_shirt.jpg',
    ),
    createProduct(
      'https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/1/0/10000008471_st.jpg',
    ),
  ]

  return (
    <div className='Landpage'>
      <ProductsGrid products={products} />
    </div>
  )
}

export default Landpage
