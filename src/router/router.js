import {createBrowserRouter} from 'react-router-dom';
import LayOut from '../pages/Layout/LayOut';
import Home from '../pages/homepage/Home';
import AuthContainer from '../pages/auth/AuthContainer';
import TypingKo from '../pages/typing/TypingKo';

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
            },
            {
                path : "/ko",
                element : <TypingKo/>,
                children : [
                    {
                        path : "/ko/typing-4",
                        element : <></>
                    },
                    {
                        path : "/ko/typing-3",
                        element : <></>
                    }
                ]
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