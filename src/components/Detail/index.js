import React, { memo, useLayoutEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { data, actions, BoxQuantity, SelectSize } from '../index';
import styles from './detail.module.scss';

function Detail() {
  const {
    detail: detail_style,
    'product-image': productImage_style,
    'product-detail': productDetail_style,
    'pro-name': proName_style,
    'pro-price': proPrice_style,
    price: price_style,
    'sale-price': salePrice_style,
    'box-btn': boxBtn_style,
    'product-description': productDescription_style,
    'product-code': productCode_style,
  } = styles;
  const { FORMAT_MONEY } = actions;
  const { id } = useParams();
  const currProduct = useMemo(() => {
    return data.products.find((product) => product._id === id);
  }, [data.products]);
  const descriptionRef = useRef();

  const handleGetQty = (qty) => {
    console.log('qty: ', qty);
  };

  const handleSelect = (opptionIdx) => {
    console.log('select: ', opptionIdx);
  };

  useLayoutEffect(() => {
    descriptionRef.current.innerText = currProduct.description;
  }, [currProduct]);

  return (
    <React.Fragment>
      <Row className={detail_style}>
        <Col className={productImage_style} lg={4}>
          <img src={currProduct.image} alt="anh san pham" />
        </Col>
        <Col className={productDetail_style} lg={8}>
          <h3 className={proName_style}>{currProduct.name}</h3>
          <div className={productCode_style}>
            <p>
              Chất liệu: <span>{currProduct.material}</span>
            </p>
            <p>Mã số: {currProduct.code}</p>
          </div>
          <div className={proPrice_style}>
            <p className={salePrice_style}>
              {FORMAT_MONEY('' + currProduct.sale)}₫
            </p>
            <p className={price_style}>
              {FORMAT_MONEY('' + currProduct.price)}₫
            </p>
          </div>
          <BoxQuantity handleGetQty={handleGetQty} />
          <SelectSize
            productImage={currProduct.image}
            sizes={currProduct.size}
            handleGetSelect={handleSelect}
          />
          <div className={boxBtn_style}>
            <button>
              <i className="fa-light fa-cart-circle-plus"></i> Thêm vào giỏ hàng
            </button>
            <button>Mua ngay</button>
          </div>
        </Col>
      </Row>
      <Row className={productDescription_style}>
        <h1>Mô tả sản phẩm</h1>
        <Col lg={6}>
          <img src={data.images.sizeAo} alt="anh size" />
        </Col>
        <Col lg={6}>
          <p ref={descriptionRef}></p>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default memo(Detail);
