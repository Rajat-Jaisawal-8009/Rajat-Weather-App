import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import WeatherApp from './components/WeatherApp';
import Main from './Main';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route basename='/rajat-weather-app' path='/rajat-weather-app' element={<Main />}>

    <Route path='/rajat-weather-app' element={<WeatherApp />}/>

    </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider  router={router} />
  </React.StrictMode>
);

