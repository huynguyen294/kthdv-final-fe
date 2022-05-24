import clsx from 'clsx';
import React, { memo, useEffect, useState } from 'react';

import styles from './select-size.module.scss';

function SelectSize({ productImage, sizes, handleGetSelect }) {
  const [active, setActive] = useState(0);
  const {
    'select-size': selectSize_style,
    'card-size': cardSize_style,
    active: active_style,
    check: check_style,
  } = styles;

  useEffect(() => {
    handleGetSelect(active);
  }, [active]);

  return (
    <div className={selectSize_style}>
      {sizes.map((size, idx) => (
        <div
          key={idx}
          className={clsx(cardSize_style, { [active_style]: idx === active })}
          onClick={() => setActive(idx)}
        >
          <div className={check_style}>
            <i className="fa-solid fa-check"></i>
          </div>
          <img src={productImage} alt="anh san pham" />
          <p>size {size}</p>
        </div>
      ))}
    </div>
  );
}
export default memo(SelectSize);
