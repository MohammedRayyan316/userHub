import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import UserProfile from '../profile/Profile.jsx';
import Modal from '@mui/material/Modal';

const dummyUsers = [
  { userId: 1, userName: 'ahmed1', fullName: 'Ahmed Khan', dob: '03/12/1998', email: 'ahmedkhan1@gmail.com', phone: '9123456780', bio: 'Software developer and football fan.' },
  { userId: 2, userName: 'fatima2', fullName: 'Fatima Ali', dob: '07/25/2000', email: 'fatima.ali2@gmail.com', phone: '9234567890', bio: 'Loves reading and cooking.' },
  { userId: 3, userName: 'mohammed3', fullName: 'Mohammed Rayyan', dob: '01/18/2002', email: 'mohammed.rayyan3@gmail.com', phone: '9345678901', bio: 'Enjoys hiking and technology.' },
  { userId: 4, userName: 'ayesha4', fullName: 'Ayesha Siddiqui', dob: '09/02/1999', email: 'ayesha.siddiqui4@gmail.com', phone: '9456789012', bio: 'Yoga enthusiast and traveler.' },
  { userId: 5, userName: 'omar5', fullName: 'Omar Farooq', dob: '12/15/2001', email: 'omar.farooq5@gmail.com', phone: '9567890123', bio: 'Passionate about coding and cricket.' },
  { userId: 6, userName: 'zainab6', fullName: 'Zainab Noor', dob: '05/28/2003', email: 'zainab.noor6@gmail.com', phone: '9678901234', bio: 'Loves painting and art.' },
  { userId: 7, userName: 'hassan7', fullName: 'Hassan Ahmed', dob: '11/09/1997', email: 'hassan.ahmed7@gmail.com', phone: '9789012345', bio: 'Tech geek and musician.' },
  { userId: 8, userName: 'layla8', fullName: 'Layla Hussein', dob: '06/20/2000', email: 'layla.hussein8@gmail.com', phone: '9890123456', bio: 'Enjoys hiking and photography.' },
  { userId: 9, userName: 'ibrahim9', fullName: 'Ibrahim Khalid', dob: '08/17/1998', email: 'ibrahim.khalid9@gmail.com', phone: '9901234567', bio: 'Fitness enthusiast and reader.' },
  { userId: 10, userName: 'amina10', fullName: 'Amina Saeed', dob: '02/03/2002', email: 'amina.saeed10@gmail.com', phone: '9012345678', bio: 'Loves traveling and cooking.' },
  { userId: 11, userName: 'lucas11', fullName: 'Lucas Smith', dob: '10/12/1999', email: 'lucas.smith11@gmail.com', phone: '9123456789', bio: 'Gamer and tech enthusiast.' },
  { userId: 12, userName: 'olivia12', fullName: 'Olivia Brown', dob: '04/05/2001', email: 'olivia.brown12@gmail.com', phone: '9234567891', bio: 'Photography and reading lover.' },
  { userId: 13, userName: 'yusuf13', fullName: 'Yusuf Karim', dob: '01/22/1998', email: 'yusuf.karim13@gmail.com', phone: '9345678902', bio: 'Sports enthusiast and coder.' },
  { userId: 14, userName: 'sara14', fullName: 'Sara Ahmed', dob: '07/14/2000', email: 'sara.ahmed14@gmail.com', phone: '9456789013', bio: 'Enjoys painting and traveling.' },
  { userId: 15, userName: 'bilal15', fullName: 'Bilal Hassan', dob: '03/30/2002', email: 'bilal.hassan15@gmail.com', phone: '9567890124', bio: 'Tech geek and football lover.' },
  { userId: 16, userName: 'noor16', fullName: 'Noor Fatima', dob: '09/08/1999', email: 'noor.fatima16@gmail.com', phone: '9678901235', bio: 'Yoga enthusiast and musician.' },
  { userId: 17, userName: 'ali17', fullName: 'Ali Raza', dob: '12/11/2001', email: 'ali.raza17@gmail.com', phone: '9789012346', bio: 'Loves cooking and gaming.' },
  { userId: 18, userName: 'maria18', fullName: 'Maria Gonzalez', dob: '06/23/2000', email: 'maria.gonzalez18@gmail.com', phone: '9890123457', bio: 'Artist and photographer.' },
  { userId: 19, userName: 'ibra17', fullName: 'Ibrahim Noor', dob: '08/29/1997', email: 'ibrahim.noor19@gmail.com', phone: '9901234568', bio: 'Cricket lover and reader.' },
  { userId: 20, userName: 'amina20', fullName: 'Amina Farah', dob: '01/05/2002', email: 'amina.farah20@gmail.com', phone: '9012345679', bio: 'Loves traveling and tech.' }
];


function UserList() {
      

  // Initialize localStorage with dummyUsers if empty (only once)
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(dummyUsers));
    }
  }, []);


    const [isEdit, setIsEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState({});
  const [data, setData] = useState(() => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : dummyUsers;
  });

  // Keep data in sync with localStorage after updates
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);
    
    

    const handleModal = (value) => {
        setOpen(value);
    }

    const handleEditOrView = (value) => {
        setOpen(true);
        setIsEdit(value.isEdit);
        setCurrentData(value.rowData);
        // Here you can set the user data to be edited/viewed
        // For example, you can fetch the user data based on the id and set it in state
    }

  const handleDataUpdate = (updatedData) => {
    setData(updatedData);
    // localStorage will be updated by useEffect above
  }


  return (
    <>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">User Id</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.fullName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Button style={{ marginRight: '8px' }} onClick={() => {handleEditOrView({isEdit: true, rowData: row})}}>Edit</Button>
                <Button onClick={() => {handleEditOrView({isEdit: false, rowData: row})}}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
        open={open}
        onClose={() => handleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ backgroundColor: 'white', marginLeft: '100px', marginRight: '100px', width: '90vw', height: '90vh', overflowY:'auto', zIndex: 1  }}>
          <UserProfile isEdit={isEdit} currentData={currentData} handleModal={handleModal} handleDataUpdate={handleDataUpdate}/>
        </div>
      </Modal>
      </>
  );
}

export default UserList;