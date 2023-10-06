import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './router/MainRoute';
import { ToastContainer } from 'react-toastify';
import SidebarState from './app/context/sidebarOpen/sidebarState';

function App() {
  return (
    <BrowserRouter>
      <SidebarState>
      <ToastContainer/>
      <MainRoute/>
      </SidebarState>
    </BrowserRouter>
  );
}

export default App;
