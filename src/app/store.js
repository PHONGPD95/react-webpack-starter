import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '~containers/Counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
