import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Padding } from '@mui/icons-material';
import { Button } from '@mui/material';
import UserProfile from '../profile/Profile.jsx';
import Modal from '@mui/material/Modal';

function UserList() {


    const [isEdit, setIsEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState({});
    
    

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




  return (
    <>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">FullName</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {JSON.parse(localStorage.getItem('users')).map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
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
          <UserProfile isEdit={isEdit} currentData={currentData} handleModal={handleModal}/>
        </div>
      </Modal>
      </>
  );
}

export default UserList;