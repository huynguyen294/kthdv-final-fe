import React, { memo, useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { data, actions } from '../index';
import styles from './payment.module.scss';

function Payment() {
  const { products, users } = data;
  const { FORMAT_MONEY } = actions;

  const oderProducts = useMemo(() => products.slice(0, 2));
  const [address, setAddress] = useState({
    address: users[0].address,
    name: users[0].name,
    sdt: users[0].sdt,
  });

  const {
    'delivery-info': deliveryInfo_style,
    payment: payment_style,
    address: address_style,
    'oder-info': oderInfo_style,
    'discount-code': discountCode_style,
    'total-line': totalLine_style,
    'curr-price': currPrice_style,
    'final-price': finalPrice_style,
    product: product_style,
    'box-btn': boxBtn_style,
    dark: dark_style,
  } = styles;

  //xử lí hoàn tất đơn hàng
  const handleDoneOrder = () => {};

  return (
    <React.Fragment>
      <Row className={payment_style}>
        <Col lg={5}>
          <h3>Thông tin đơn hàng</h3>
          <div className={oderInfo_style}>
            {oderProducts.map((oderProduct) => (
              <div key={oderProduct._id} className={product_style}>
                <img src={oderProduct.image} alt="ảnh sản phẩm" />
                <div>
                  <p>{oderProduct.name}</p>
                  <p>size {oderProduct.size[0]}</p>
                </div>
                <p>{FORMAT_MONEY('' + oderProduct.price)}₫</p>
                <span>{oderProduct._id + 2}</span>
              </div>
            ))}
            <hr />
            <div className={discountCode_style}>
              <button>Sử dụng</button>
              <input type="text" placeholder="Mã giảm giá" />
            </div>
            <hr />
            <div className={totalLine_style}>
              <p>Tạm tính</p>
              <p id={currPrice_style}>51,000₫</p>
            </div>
            <div className={totalLine_style}>
              <p>Phí vận chuyển</p>
              <p>21,000₫</p>
            </div>
            <hr />
            <div className={totalLine_style}>
              <p>Tổng cộng</p>
              <p id={finalPrice_style}>72,000₫</p>
            </div>
          </div>
        </Col>
        <Col lg={7} className={deliveryInfo_style}>
          <h3>Thông tin giao hàng</h3>
          <div className={address_style}>
            <label htmlFor="name">Họ và tên</label>
            <input
              type="name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              id="name"
            />
            <label htmlFor="sdt">Số điện thoại</label>
            <input
              type="text"
              value={address.sdt}
              onChange={(e) => setAddress({ ...address, sdt: e.target.value })}
              id="sdt"
            />
            <label htmlFor="address">Địa chỉ người mua/ người nhận</label>
            <input
              type="text"
              value={address.address}
              onChange={(e) =>
                setAddress({ ...address, address: e.target.value })
              }
              id="address"
            />
            <div className={boxBtn_style}>
              <button>Hoàn tất đơn hàng</button>
              <Link to="/cart">
                <button>Quay về giỏ hàng</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default memo(Payment);
