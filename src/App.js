import React from 'react'
import { AppRouter } from './Router/AppRouter';

import { Provider } from 'react-redux'; 
import { store } from './Redux/store';

export const App = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}
