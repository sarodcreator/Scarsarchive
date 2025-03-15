import {  RouterProvider } from 'react-router-dom';
import Routes from './Routes/index';

function App() {
  return (
    <div>
      <RouterProvider router={Routes} />
    </div>
  )
}

export default App;