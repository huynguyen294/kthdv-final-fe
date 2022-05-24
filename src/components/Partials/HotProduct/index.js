import { memo, useLayoutEffect, useMemo, useState } from 'react';
import { Row } from 'react-bootstrap';

import { data, ProductBlock, PageController, Filter } from '../../index';
import styles from './hot-product.module.scss';

function HotProduct() {
  const {
    'hot-product': hotProduct_style,
    title: title_style,
    description: description_style,
    'filter-container': filterContainer_style,
    'box-product': boxProduct_style,
  } = styles;
  const products = data.products;
  const pageLength = 8;
  const pages = useMemo(() => {
    const pagesSize = Math.round(products.length / pageLength);
    var pages = [];
    for (var i = 1; i <= pagesSize; i++) {
      pages = [...pages, i];
    }
    return pages;
  }, [products]);
  const [currProducts, setCurrProducts] = useState(products.slice([]));
  const [currPage, setCurrPage] = useState(1);

  const handelGetCurrPage = (currPageGet) => {
    setCurrPage(currPageGet);
  };

  const handleGetCurrFilter = (currFilter) => {
    console.log(currFilter);
  };

  useLayoutEffect(() => {
    if (currPage * pageLength > products.length) {
      setCurrProducts(
        products.slice((currPage - 1) * pageLength, products.length)
      );
    } else {
      setCurrProducts(
        products.slice((currPage - 1) * pageLength, pageLength * currPage)
      );
    }
  }, [currPage]);

  return (
    <Row className={hotProduct_style}>
      <div className={title_style}>
        <h3>Top sản phẩm HOT</h3>
        <p className={description_style}>
          Những sản phẩm thời trang mới nhất/Hot nhất
        </p>
      </div>
      <div className={filterContainer_style}>
        <Filter handleGetCurrFilter={handleGetCurrFilter} />
      </div>
      <div className={boxProduct_style}>
        {currProducts.map((product) => (
          <ProductBlock key={product._id} product={product} />
        ))}
      </div>
      <div>
        <PageController pages={pages} handelGetCurrPage={handelGetCurrPage} />
      </div>
    </Row>
  );
}

export default memo(HotProduct);
