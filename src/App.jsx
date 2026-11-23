/*
  App.jsx
  Contains React Router for navigation

  References:
  - Routing: https://www.w3schools.com/react/react_router.asp
*/

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StyleGuide from './pages/StyleGuide';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      {/* <nav>
        <Link to="/">Style Guide</Link>
      </nav> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<StyleGuide />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
