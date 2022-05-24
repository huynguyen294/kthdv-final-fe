import { memo, useEffect, useLayoutEffect, useState } from 'react';

import { Checkbox, actions } from '../../index';
import styles from './cart-item.module.scss';

function CartItem({ product, productSize, getCart }) {
  const { FORMAT_MONEY } = actions;
  const [quality, setQuality] = useState(1);
  const [currItem, setCurrItem] = useState({});

  const {
    'cart-item': cartItem_style,
    'price-group': priceGroup_style,
    'reduced-price': reducedPrice_style,
    'final-price': finalPrice_style,
    product: product_style,
    price: price_style,
    qty: qty_style,
  } = styles;

  useLayoutEffect(() => {
    if (quality < 1) {
      setQuality(1);
    }
    if (currItem.active) {
      setCurrItem((prev) => ({ ...prev, currPrice: product.sale * quality }));
    } else {
      setCurrItem((prev) => ({ ...prev, currPrice: 0 }));
    }
  }, [quality, currItem.active]);

  const handleChecked = (item) => {
    setCurrItem((prev) => ({ ...prev, ...item }));
  };

  useEffect(() => {
    getCart(currItem);
  }, [currItem]);

  return (
    <div className={cartItem_style}>
      <div className={product_style}>
        <Checkbox handleGetChecked={handleChecked} name={product._id} />
        <img src={product.image} alt="ảnh sản phẩm" />
        <div>
          <p>{product.name}</p>
          <p>productSize {productSize}</p>
        </div>
      </div>
      <div className={priceGroup_style}>
        <p className={reducedPrice_style}>
          {FORMAT_MONEY('' + product.sale)} ₫
        </p>
        <p className={price_style}>{FORMAT_MONEY('' + product.price)} ₫</p>
      </div>
      <div className={qty_style}>
        <button onClick={() => setQuality((prev) => prev - 1)}>-</button>
        <input
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          type="text"
        />
        <button onClick={() => setQuality((prev) => prev + 1)}>+</button>
      </div>
      <p className={finalPrice_style}>
        {FORMAT_MONEY('' + product.sale * quality)} ₫
      </p>
      <span>
        <i className="fa-light fa-trash-can"></i>
      </span>
    </div>
  );
}

export default memo(CartItem);
