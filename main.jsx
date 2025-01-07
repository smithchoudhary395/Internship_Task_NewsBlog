import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider,BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import PreviewBlog from './components/PreviewPages/previewBlog';
import AddNews from './components/PreviewPages/AddNews';
import Home from './components/Home';
import './App.css'
import './App.jsx'
import App from './App.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/home" element={<Home />} />
//       <Route path="/news" element={<AddNews />} />
//     </Route>
//   )
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
   
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </StrictMode>
);
