import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;