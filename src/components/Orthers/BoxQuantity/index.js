import clsx from 'clsx';
import { memo, useLayoutEffect, useState } from 'react';

import styles from './box-quantity.module.scss';

function BoxQuantity({ handleGetQty }) {
  const {
    'box-quantity': boxQuantity_style,
    'qua-btn': quaBtn_style,
    'qua-input': quaInput_style,
  } = styles;

  const [quanlity, setQuanlity] = useState(1);

  useLayoutEffect(() => {
    if (quanlity < 1) {
      setQuanlity(1);
    }
    if (quanlity >= 1) {
      handleGetQty(quanlity);
    }
  }, [quanlity]);
  return (
    <div className={boxQuantity_style}>
      <button
        className={clsx(quaBtn_style, 'minus')}
        id="qua-btn-minus"
        onClick={() => setQuanlity((prev) => prev - 1)}
      >
        -
      </button>
      <input
        className={quaInput_style}
        type="text"
        value={quanlity}
        onChange={(e) => setQuanlity(e.target.value)}
      />
      <button
        className={clsx(quaBtn_style, 'add')}
        id="qua-btn-add"
        onClick={() => setQuanlity((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
}

export default memo(BoxQuantity);
