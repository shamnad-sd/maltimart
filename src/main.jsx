import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/Store.jsx'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={1000}
        closeOnClick
        pauseOnHover={false}
        />
      <App />
    </Provider>
  </BrowserRouter>
)
