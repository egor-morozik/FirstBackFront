import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import ProfileList from './ProfileList.jsx'

function App() {
  return (
    <BrowserRouter>
      {/* Навигация с вашим дизайном */}
      <div style={{padding: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <Link 
          to="/" 
          style={{textDecoration: 'none'}}
        >
          <div style={{width: 200, height: 50, padding: 10, background: 'white', borderRadius: 12, outline: '1px #C8C8C8 solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
              Главная
            </div>
          </div>
        </Link>
        
        <Link 
          to="/profiles" 
          style={{textDecoration: 'none'}}
        >
          <div style={{width: 200, height: 50, padding: 10, background: 'white', borderRadius: 12, outline: '1px #C8C8C8 solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
              Кандидаты
            </div>
          </div>
        </Link>
      </div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profiles" element={<ProfileList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App