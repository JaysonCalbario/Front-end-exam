import React, { useEffect, useState } from "react";
import { User } from "./components/User";
import AddUser from "./components/AddUser";
import Header  from "./components/Header";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Emitter.on('EVENT-USER-CREATE-SUCCEED', fetchData);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  

  const onEdit = async (id, name, username, phone, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id:id,
        name: name,
        username: username,
        phone: phone,
        email: email

      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
          
        }
      })
      .then((data) => {
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.username = username;
            user.phone = phone;
            user.email = email;
            toast.info("User edit successfully!");
          }

          return user;
        });

        setUsers((users) => updatedUsers);
      })
      .catch((error) => console.log(error));
     
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
         
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
          toast.error("User delete successfully!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    
    <div className="App">
      <div>
      <Header />
      </div>
      <div>
      <AddUser />
      </div>
      <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
/> {/* Add this line */}
      {/* ... Rest of your component code */}
    </>
      <h1 className="Header-List">User List</h1>
      <div class="container"> 
        <table class="table table-bordered border-primary ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                id={user.id}
                key={user.id}
                name={user.name}
                username={user.username}
                phone={user.phone}
                email={user.email}
                onEdit={onEdit}
                onDelete={onDelete}
              />
             
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}
