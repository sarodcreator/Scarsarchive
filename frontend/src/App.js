import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/index';
import Gallery from './gallery/index';
import Contact from './contact/index';

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: '/contact-us',
    element: <Contact />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  )
}

export default App;