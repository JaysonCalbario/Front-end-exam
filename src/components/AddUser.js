import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value,evt.target.username.value,evt.target.phone.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.username.value = "";
    evt.target.phone.value = "";
    evt.target.email.value = "";
  };

  return (
    <div class="card border-primary border-5 p-2 mt-5 container">
      <form onSubmit={handleOnSubmit}>
        
        <div class="row justify-content-center">
        <h1 className="header">Adding User</h1>
          <div class="col-6">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control w-75 "
                id="floatingInput"
                name="name"
                placeholder="Name"
              />
              <label for="floatingInput">Name</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control w-75"
                id="floatingInput"
                name="username"
                placeholder="Username"
              />
              <label for="floatingInput">Username</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control w-75"
                id="floatingInput"
                name="phone"
                placeholder="Phone"
              />
              <label for="floatingInput">Phone</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating mb-3">
              <input
                type="email"
                name="email"
                class="form-control w-75"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
          </div>
          <div class="col-8">
          <div class="d-grid w-50 gap-2">
          <button onSubmit={handleOnSubmit} type="submit" class="btn mt-2 btn-primary btn-lg">Add</button>
          </div>
         
          </div>
          
        </div>
       
      </form>
    </div>
  );
};
