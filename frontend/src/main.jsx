import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProfileList from './ProfileList.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <div>
      <App />
    </div>
    <div>
      <ProfileList />
    </div>
  </>
);