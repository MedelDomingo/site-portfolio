import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import JobFullStackPage from './pages/JobFullStackPage.jsx';
import JobProjectManagerPage from './pages/JobProjectManagerPage.jsx';
import JobServerAdminPage from './pages/JobServerAdminPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/job-1", element: <JobFullStackPage />},
  { path: "/job-2", element: <JobProjectManagerPage />},
  { path: "/job-3", element: <JobServerAdminPage />},
  { path: "*", element: <NotFoundPage /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
