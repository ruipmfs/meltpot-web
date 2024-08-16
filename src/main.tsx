import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { DeleteAccount } from "./DeleteAccount/DeleteAccount";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/delete-account',
        element: <DeleteAccount />,
    },
    {
        path: '*',
        element: <App />,
    }]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <PrimeReactProvider>
             <RouterProvider router={router}/>
          </PrimeReactProvider>
      </Provider>
  </React.StrictMode>,
)
