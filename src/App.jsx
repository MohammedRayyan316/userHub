import './App.css'
import UserProfile from "./components/profile/Profile.jsx";
import UserList from './components/userlist/UserList.jsx';
import Navbar from './components/profile/Navbar.jsx';
import { Padding } from '@mui/icons-material';


function App() {
  const dummyUsers = 
    [
        { id: 1, userName: 'Alice', fullName: 'Alice Johnson' , dob:'02/21/2002', email: 'alicejohn@gmail.com', phone: '1234567890', bio: 'Loves hiking and outdoor adventures.'},
        { id: 2, userName: 'Bob', fullName: 'Bob Smith' , dob:'04/02/2003', email: 'bobsmith@gmail.com', phone: '123343490', bio: 'Loves coding and jogging.'},
        { id: 3, userName: 'Syed', fullName: 'Syed Ali' , dob:'05/04/2001', email: 'syedali@gmail.com', phone: '1234344390', bio: 'Loves salah and outdoor adventures.'},
    ]     

    localStorage.setItem("users", JSON.stringify(dummyUsers));

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
