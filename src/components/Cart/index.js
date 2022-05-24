import { memo, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FORMAT_MONEY } from '../../actions';

import { CartItem, data } from '../index';
import styles from './cart.module.scss';

function Cart() {
  const { products } = data;
  const cartProducts = useMemo(() => products.slice(10, 13), [products]);
  const [itemCheckeds, setItemCheckeds] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    'oder-final-price': oderFinalPrice_style,
    'main-cart': mainCart_style,
    'oder-control': oderControl_style,
    'oder-body': oderBody_style,
    message: message_style,
    cart: cart_style,
    'oder-title': oderTitle_style,
    'box-cart': boxCart_style,
  } = styles;

  const handleGetItemChecked = (item) => {
    setItemCheckeds((prev) => {
      if (!prev.length) {
        return [...prev, item];
      } else {
        // xử lí không thêm phần từe trùng và update phần tử bị trùng
        if (prev.find((prevItem) => prevItem.name === item.name)) {
          prev.forEach((prevItem, idx) => {
            if (prevItem.name === item.name) {
              prev[idx] = { ...prev[idx], ...item };
            }
          });
        } else {
          return [...prev, item];
        }
        return [...prev];
      }
    });
  };

  useLayoutEffect(() => {
    const price = itemCheckeds.reduce((acc, item) => {
      return acc + item.currPrice;
    }, 0);
    setTotalPrice(price);
  }, [itemCheckeds]);

  return (
    <Row className={cart_style}>
      <Col lg={9} className={boxCart_style}>
        <h1>Giỏ hàng</h1>
        <div className={mainCart_style}>
          {cartProducts.map((cartProduct) => (
            <CartItem
              key={cartProduct._id}
              product={cartProduct}
              getCart={handleGetItemChecked}
              productSize={cartProduct.size[0]}
            />
          ))}
        </div>
      </Col>
      <Col lg={3}>
        <div className={oderControl_style}>
          <p className={oderTitle_style}>Thông tin đơn hàng</p>
          <hr />
          <div className={oderBody_style}>
            <p>Tổng tiền</p>
            <p className={oderFinalPrice_style}>
              {FORMAT_MONEY('' + totalPrice)}đ
            </p>
          </div>
          <hr />
          <p className={message_style}>
            Bạn có thể nhập mã giảm giá ở trang thanh toán
          </p>
          <Link to="/payment">
            <button>Thanh toán</button>
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default memo(Cart);
