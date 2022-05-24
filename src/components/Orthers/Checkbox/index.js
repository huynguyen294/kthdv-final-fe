import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import styles from './checkbox.module.scss';

function Checkbox({ lable, checked, unChecked, name, handleGetChecked }) {
  const [active, setActive] = useState(false);

  const {
    'checkbox-icon': checkboxIcon_style,
    checkbox: checkbox_style,
    active: active_style,
  } = styles;

  useEffect(() => {
    if (checked) {
      setActive(checked);
    }
  }, [checked]);

  useEffect(() => {
    if (unChecked) {
      setActive(false);
    }
  }, [unChecked]);

  useEffect(() => {
    if (handleGetChecked) {
      handleGetChecked({ active, name });
    }
  }, [active]);
  return (
    <div
      className={clsx(checkbox_style, {
        [active_style]: active,
      })}
      onClick={() => setActive(!active)}
    >
      <div className={checkboxIcon_style}>
        <i className="fa-solid fa-check"></i>
      </div>
      <p>{lable}</p>
    </div>
  );
}

export default memo(Checkbox);
