/*
  App.jsx
  Contains React Router for navigation

  References:
  - Routing: https://www.w3schools.com/react/react_router.asp
  - Scroll Restoration: https://reactrouter.com/api/components/ScrollRestoration
*/

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Link,
  ScrollRestoration,
} from "react-router-dom";
import StyleGuide from "./pages/StyleGuide";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <ScrollRestoration />
          {/* Navigation Bar */}
          {/* <nav>
            <Link to="/">Style Guide</Link>
          </nav> */}
          <Outlet />
        </>
      }
    >
      {/* Routes */}
      <Route path="/" element={<StyleGuide />} />
      <Route path="/template/homepage" element={<Homepage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
