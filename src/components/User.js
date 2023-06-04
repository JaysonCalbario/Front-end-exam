import React, { Fragment, useState } from "react";
import "../App.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
}; 

const styles = {
  backgroundColor: 'gray',
  textAlign:'center',
};

export const User = ({ name, username,phone,email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };


  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value,evt.target.username.value,evt.target.phone.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      {isEdit ? (
        <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h1">
              EDITTING 
            </Typography>
            <div>
        <form onSubmit={handleOnEditSubmit}>
        <div class="col-8">
            <div class="form-floating mb-3">
              <input style={styles}
                type="number"
                class="form-control w-25 "
                id="floatingInput"
                name="id"
                disabled
                placeholder="ID"
                defaultValue={id}
              />
              <label for="floatingInput">ID</label>
            </div>
          </div>
        <div class="col-12">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control w-100 "
                id="floatingInput"
                name="name"
                placeholder="Name"
                defaultValue={name}
              />
              <label for="floatingInput">Name</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control w-100 "
                id="floatingInput"
                name="username"
                placeholder="Username"
                defaultValue={username}
              />
              <label for="floatingInput">Username</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control w-100 "
                id="floatingInput"
                name="phone"
                placeholder="Phone"
                defaultValue={phone}
              />
              <label for="floatingInput">Phone</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating mb-3">
              <input
                type="email"
                name="email"
                class="form-control  w-100"
                id="floatingInput"
                placeholder="name@example.com"
                defaultValue={email}
              />
              <label for="floatingInput">Email address</label>
            </div>
          </div>
          <div>
              <div className="col-12">
                <div className="d-grid gap-2">
                  <Button variant="contained" color="primary"    type="submit" className="buttonStyles-save" 
                   Tooltip title="save" onSubmit={handleOnEditSubmit} startIcon={<SaveIcon />}>
                    Save
                  </Button>
                  <Button variant="contained" color="warning" autoFocus onClick={handleClose}   type="button" className="buttonStyles-save" 
                   Tooltip title="close"  startIcon={<CloseIcon />}>
                    Close
                  </Button>
                </div>
              </div>
              </div>
              
              </form>
        </div>
          </Box>
        </Modal>
      
      </div>

      ) : (
        <>
        <tr>
       
        <td>{name}</td>
        <td>{username}</td>
        <td>{phone}</td>
        <td>{email}</td>
        
        <td>
        <Button variant="outlined" open={open}
          onClose={handleClose} color="success" style={{marginRight:5}}  type="button"   className="buttonStyles-edit"  Tooltip title="Edit" onClick={handleEdit} startIcon={<EditIcon />}>
            Edit
          </Button>
          
            <Button variant="outlined" color="error"  type="button"   className="buttonStyles-delete"  Tooltip title="Delete" onClick={handleDelete} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </td>
        
        </tr>
 
       </>
       
      )}
      
      
    </Fragment>
  );
};
