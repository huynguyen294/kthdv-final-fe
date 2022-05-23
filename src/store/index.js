import { configureStore } from '@reduxjs/toolkit';
import { UIReducer } from '../reducers';

const store = configureStore({
  reducer: {
    UIStore: UIReducer,
  },
});

export default store;
