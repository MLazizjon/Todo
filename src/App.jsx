import { Route, Routes } from 'react-router-dom';
// ? toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

// Context Providerni import qilamiz
import { TodoProvider } from './context/Provider'; 

// import Header from './components/header/Header';
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"

function App() {
  return (
    // Barcha route-lar TodoProvider ichida bo'lishi kerak
    <TodoProvider>
      <div className="App">
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {/* <Header /> */}
        
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </div>
    </TodoProvider>
  );
}

export default App;