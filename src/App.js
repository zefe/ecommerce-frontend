import React from 'react';
import { HomeView } from './views/HomeView';
import { Provider } from 'react-redux';
import { store } from './stateManagement/store';
import { AppRouter } from './routes/AppRouter';



export const App = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}
