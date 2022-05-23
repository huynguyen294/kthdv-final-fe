import { memo } from 'react';
import { Link } from 'react-router-dom';

import { data } from '../index';
import styles from './login.module.scss';

function Login() {
  const {
    'login-container': loginContainer_style,
    login: login_style,
    title: title_style,
    'login-form': loginForm_style,
  } = styles;

  return (
    <div
      className={login_style}
      style={{ backgroundImage: `url(${data.images.loginBg})` }}
    >
      <div className={loginContainer_style}>
        <div className={loginForm_style}>
          <h1 className={title_style}>Đăng nhập</h1>
          <input type="text" placeholder="Nhập email/số điện thoại" />
          <input type="text" placeholder="Nhập mật khẩu" />
          <i>Quên mật khẩu?</i>
          <button>Đăng nhập</button>
          <p>
            Bạn chưa có tài khoảng? <Link to={'/register'}>Đăng kí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Login);
