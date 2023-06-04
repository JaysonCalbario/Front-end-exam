
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1300,
  height: 410,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};

const styles = {
  marginTop:50,

};


const AddUser = () => {

  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const onAdd = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      // Emitter.emit('EVENT-USER-CREATE-SUCCEED', {});
      console.log(JSON.stringify(json));
      toast.success("User added successfully!");
      
    })
    .catch((error) => console.warn(error));
   
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onAdd();
   
  };
  
  const onInputchange = (event) => {
    setItems({
      ...items,
      [event.target.name]: event.target.value,
      [event.target.username]: event.target.value,
      [event.target.phone]: event.target.value,
      [event.target.email]: event.target.value
    });
  }


  return (
    <>
      <Button style={styles} variant="contained" color="primary" autoFocuson onClick={handleOpen}   type="button" className="buttonStyles-save btn-lg" 
                   Tooltip title="Cancel"  startIcon={<AddIcon />}>
                    Add Users
                  </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <div className="card border-primary border-5 p-2 mt-5 container">
          <form onSubmit={handleOnSubmit}>
            
            <div className="row justify-content-center">
            <h1 className="header">Adding User</h1>
            
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input
                    type="text" required
                    className="form-control w-75 "
                    id="floatingInput"
                    name="name"
                    placeholder="Name"
                    onChange={onInputchange}
                   
                  />
                  <label for="floatingInput">Name</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input 
                    type="text" required
                    className="form-control w-75"
                    id="floatingInput"
                    name="username"
                    placeholder="Username"
                    onChange={onInputchange}
                   
                  />
                  <label for="floatingInput">Username</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input 
                    type="text" required
                    className="form-control w-75"
                    id="floatingInput"
                    name="phone"
                    placeholder="Phone"
                    onChange={onInputchange}
                   
                  />
                  <label for="floatingInput">Phone</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input 
                    type="email"
                    name="email"
                    className="form-control w-75"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={onInputchange}
                   
                  />
                  <label for="floatingInput">Email address</label>
                </div>
              </div>
              <div className="col-12 d-grid gap-1 ">
              <Button variant="contained" color="primary" autoFocus onClick={handleOnSubmit}  type="button" className="buttonStyles-save" 
                      Tooltip title="Add"  startIcon={<AddIcon />}>Add
                      </Button>
              <Button variant="contained" color="warning" autoFocus onClick={handleClose}   type="button" className="buttonStyles-save" 
                      Tooltip title="Cancel"  startIcon={<CloseIcon />}>Cancel
                      </Button>
              </div>  
            </div>
          </form>
        </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddUser;
