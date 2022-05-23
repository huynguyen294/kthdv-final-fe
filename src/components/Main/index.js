import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import { Home, Search, Cart } from '../index';
import styles from './main.module.scss';

function Main() {
  const { main: main_style } = styles;

  return (
    <Container className={main_style}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
}

export default memo(Main);
