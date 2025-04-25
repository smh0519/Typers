import {createBrowserRouter} from 'react-router-dom';
import LayOut from '../pages/Layout/LayOut';
import Home from '../pages/homepage/Home';
import AuthContainer from '../pages/auth/AuthContainer';

const router = createBrowserRouter([
    {
        path :"/",
        element : <LayOut/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : "/auth",
                element : <AuthContainer/>
            }
        ]
    },
],
{
    future: {
        v7_startTransition: true,
        v7_fetcherPersist : true,
        v7_normalizeFormMethod : true,
        v7_partialHydration : true,
        v7_relativeSplatPath : true,
        v7_skipActionErrorRevalidation : true,
    },
  })


export default router