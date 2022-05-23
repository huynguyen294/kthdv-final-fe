import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import { Main, Nav, Login } from '../index';

function App() {
  const { app: app_style } = styles;
  return (
    <div className={app_style}>
      <Nav></Nav>
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
