import clsx from 'clsx';
import { memo } from 'react';

import styles from './product-block.module.scss';

function ProductBlock({ product }) {
  const {
    'product-block': productBlock_style,
    'product-image': productImage_style,
    'product-price': productPrice_style,
    sale: sale_style,
  } = styles;

  return (
    <div className={productBlock_style}>
      <img src={product.image} alt="" className={productImage_style} />
      <div
        className={clsx(productPrice_style, {
          [sale_style]: product.sale !== product.price,
        })}
      >
        <p>{product.price / 1000}</p>
        <span>{product.sale / 1000}</span>
      </div>
    </div>
  );
}

export default memo(ProductBlock);
