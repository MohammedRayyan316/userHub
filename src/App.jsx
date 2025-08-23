import './App.css'
import UserProfile from "./components/profile/Profile.jsx";
import UserList from './components/userlist/UserList.jsx';
import Navbar from './components/profile/Navbar.jsx';
import { Padding } from '@mui/icons-material';


function App() {
  
  return (
<>
  
    <Navbar />
    <div style={{ margin: '64px', padding: '16px' }}>

    <UserList />
    </div>
    </>
  )
}

export default App;