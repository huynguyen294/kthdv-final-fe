import { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { data } from '../index';
import styles from './nav.module.scss';

function Nav() {
  const {
    'nav-bar': navBar_style,
    'nav-left': navLeft_style,
    'nav-main': navMain_style,
    'nav-menu': navMenu_style,
    'nav-right': navRight_style,
    'menu-right': menuRight_style,
    'sub-menu': subMenu_style,
    'all-category': allCategory_style,
    'all-cat-item': allCatItem_style,
    search: search_style,
    user: user_style,
    cart: cart_style,
  } = styles;

  const { category, collections } = data;

  return (
    <div className={navBar_style}>
      <Container>
        <Row>
          <Col lg={3} className={navLeft_style}>
            <Link to={'/'}>
              <img src={data.images.logoDark} alt="logo" />
            </Link>
          </Col>
          <Col lg={6} className={navMain_style}>
            <ul className={navMenu_style}>
              {category.map((item, idx) => {
                if (idx <= 2) {
                  return (
                    <li key={item._id}>
                      {item.name}
                      <i className="fa-solid fa-angle-down"></i>
                      <ul className={subMenu_style}>
                        {collections.map((collection) => {
                          if (collection.category_id === item._id) {
                            return (
                              <li key={collection._id}>{collection.name}</li>
                            );
                          }
                        })}
                      </ul>
                    </li>
                  );
                }
              })}
              <li>
                <i className="fa-solid fa-bars"></i>
                <i className="fa-solid fa-angle-down"></i>
                <ul className={clsx(subMenu_style, allCategory_style)}>
                  {category.map((item, idx) => {
                    if (idx > 2) {
                      return (
                        <li className={allCatItem_style} key={item._id}>
                          <ul>
                            <li>{item.name}</li>
                            {collections.map((collection) => {
                              if (collection.category_id === item._id) {
                                return (
                                  <li key={collection._id}>
                                    {collection.name}
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </li>
                      );
                    }
                  })}
                </ul>
              </li>
            </ul>
          </Col>
          <Col lg={3} className={navRight_style}>
            <div className={menuRight_style}>
              <div className={search_style}>
                <i className="fa-light fa-magnifying-glass"></i>
              </div>
              <div className={user_style}>
                <Link to={'/login'}>
                  <i className="fa-light fa-user"></i>
                </Link>
              </div>
              <div className={cart_style}>
                <Link to={'/cart'}>
                  <i className="fa-light fa-cart-shopping-fast"></i>
                  <span>5</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default memo(Nav);
