import React from 'react'
import App from './App'
import { Provider } from 'react-redux';
import weatherStore from './components/stores/store';
function Main() {



  return (
    <>
 <Provider store={weatherStore} >
 <App />
 </Provider>
     

    </>
  )
}

export default Main
