import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ResultForm from './components/ResultForm';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {store} from "./redux/store";

import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from "react-router-dom";
import FormInput from "./components/FormInput";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "*",
                element: <Navigate to="/Home" replace /> ,
            },
            {
                path: "Home",
                index : true,
                element: <FormInput />,
            },
            {
                path: "Result_form",
                element: <ResultForm />,
            },

        ]
    }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//     <Provider store={store}>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </Provider>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
