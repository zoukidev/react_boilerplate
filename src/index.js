import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'

import {store} from './store'
import {router} from "./router";

import './app.css';
  
const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
);