
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { useSelector } from 'react-redux';

import blackimg from './components/image/themeImg/blackimg.jpg'




function App() {

  const getTheme = useSelector((state)=>state.backgroundTheme)
 

  return (
    <div className='main-container' style={{ backgroundImage: `URL(${getTheme.theme}), URL(${blackimg})`, background: getTheme.theme  }}>
    <div className='main-page'>
     
      <NavBar />
      <Outlet />
      <Footer />
      
   
    </div>
    </div>
   
  );
}

export default App;
