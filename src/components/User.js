import React, { Fragment, useState } from "react";
import "../App.css";

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
          <div className="container">
           <div  className="card-layer" class="card border-success p-5 "  >
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control w-100  "
                    id="floatingInput"
                    name="name"
                    placeholder="Name"
                    defaultValue={name}
                  />
                   <label for="floatingInput">Name</label>
                  </div>
                 
                </div>
                <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control "
                    id="floatingInput"
                    name="username"
                    placeholder="Username"
                    defaultValue={username}
                  />
                  <label for="floatingInput">Username</label>
                </div>
                </div>
                <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control "
                    id="floatingInput"
                    name="phone"
                    placeholder="Phone"
                    defaultValue={phone}
                  />
                  <label for="floatingInput">Phone Number</label>
                </div>
                </div>
              
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control "
                    id="floatingInput"
                    defaultValue={email}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
              </div>
              <div className="col-3">
                <div className="d-grid w-50 gap-2">
                  <button
                    onSubmit={handleOnEditSubmit}
                    type="submit"
                    className="btn mt-2 btn-primary btn-lg"
                  >
                    Save
                  </button>
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
            <button
            onClick={handleEdit}
            type="button"
            className="btn m-2 btn-success"
            >
            Edit
            </button>
            <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger"
            >
            Delete
            </button>
        </td>
        </tr>
        
      )}
      
    </Fragment>
  );
};
