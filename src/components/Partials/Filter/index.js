import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';

import styles from './filter.module.scss';

function Filter({ handleGetCurrFilter }) {
  const [active, setActive] = useState(false);
  const [currFilter, setCurrFilter] = useState('hot');
  const {
    filter: filter_style,
    'curr-filter': currFilter_style,
    'menu-filter': menuFilter_style,
    active: active_style,
  } = styles;

  useEffect(() => {
    handleGetCurrFilter(currFilter);
  }, [currFilter]);

  return (
    <div
      onClick={() => setActive(!active)}
      className={clsx(filter_style, { [active_style]: active })}
    >
      <p className={currFilter_style}>
        {currFilter === 'hot'
          ? 'bán chạy nhất'
          : currFilter === 'down'
          ? 'Giá giảm dần'
          : currFilter === 'up'
          ? 'Giá tăng dần'
          : ''}
      </p>
      <i className="fa-solid fa-angles-down"></i>
      <ul className={menuFilter_style}>
        <li onClick={() => setCurrFilter('down')}>Giá giảm dần</li>
        <li onClick={() => setCurrFilter('up')}>Giá tăng dần</li>
        <li onClick={() => setCurrFilter('hot')}>bán chạy nhất</li>
      </ul>
    </div>
  );
}
export default memo(Filter);
