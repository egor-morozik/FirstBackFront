import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import ProfileList from './ProfileList.jsx'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          Главная
        </Link>
        <Link to="/profiles">
          Профили
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profiles" element={<ProfileList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App