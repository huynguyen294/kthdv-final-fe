import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import { Home, Search, Cart, Detail, ScrollToTop, Payment } from '../index';
import styles from './main.module.scss';

function Main() {
  const { main: main_style } = styles;

  return (
    <Container className={main_style}>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Container>
  );
}

export default memo(Main);
