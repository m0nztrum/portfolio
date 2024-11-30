import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from './not-found';
import { ContactPage } from './pages/ContactPage';
import { Layout } from './layout';
import { HomePage } from './pages/HomePage';

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        element: <Layout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
        ],
    },
]);
