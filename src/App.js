import './App.css';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './global/global'
import router from './router/router';

function App() {
  return (
 <>
  <GlobalStyle/>
  <RouterProvider router={router} future={{ v7_startTransition: true }}/>
 </>
  );
}

export default App;
