import React from 'react';
import { HomeView } from './views/HomeView';
//import { Provider } from 'react-redux';
//import { store } from './stateManagement/store/store';
import { AppRouter } from './routes/AppRouter';



export const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  )
}
