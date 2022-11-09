import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Root from './pages/Root';
import Videos from './pages/Videos';
import VideosDetail from './pages/VideosDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index:true, element:<Videos />},
      {path:'/videos',element:<Videos />},
      {path:'/videos/query',element:<Videos />},
      {path:'/videos/watch/id',element:<VideosDetail />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
