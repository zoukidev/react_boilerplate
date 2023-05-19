import { createBrowserRouter } from "react-router-dom";

import {ErrorPage} from "./pages/error";
import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />,
    },
]);