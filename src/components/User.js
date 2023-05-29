import React, { Fragment, useState } from "react";
import "../App.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

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

  return (
    <Fragment>
      {isEdit ? (
        <div>
        <form onSubmit={handleOnEditSubmit}>
        <div class="card border-secondary border-3 p-3">
        <div class="row justify-content-center">
        <div class="col-4">
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
          <div class="col-4">
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
          <div class="col-4">
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
              <div className="col-4">
                <div className="d-grid w-100 gap-2">
                
                  <Button variant="outlined" color="primary" style={{marginRight:5}}  type="submit" className="buttonStyles-save" 
                   Tooltip title="save" onSubmit={handleOnEditSubmit} startIcon={<SaveIcon />}>
                    Save
                  </Button>
                </div>
              </div>
              </div>
              </div>
              </div>
          </form>
        </div>
    
      ) : (
        <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>{phone}</td>
        <td>{email}</td>
        
        <td>
        <Button variant="outlined" color="success" style={{marginRight:5}}  type="button"   className="buttonStyles-edit"  Tooltip title="Edit" onClick={handleEdit} startIcon={<EditIcon />}>
            Edit
          </Button>
          
            <Button variant="outlined" color="error"  type="button"   className="buttonStyles-delete"  Tooltip title="Delete" onClick={handleDelete} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </td>
        </tr>
        
      )}
      
    </Fragment>
  );
};
