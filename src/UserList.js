import React, { useState } from "react";
import EditUser from "./EditUser"; // Add this line
import "./UserList.css"; // Add this line

const UserList = ({ users, updateUser, deleteUser }) => {
  const [editUser, setEditUser] = useState(null);

  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleSaveUser = (updatedUser) => {
    updateUser(updatedUser);
    setEditUser(null);
  };

  const handleDeleteUser = (email) => {
    deleteUser(email);
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.email} className="user-card">
          <h3 className="user-card-name">{user.name}</h3>
          <p className="user-card-info">Email: {user.email}</p>
          <p className="user-card-info">Phone: {user.phone}</p>
          <div className="user-card-buttons">
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
          </div>
        </div>
      ))}

      {editUser && <EditUser user={editUser} onSaveUser={handleSaveUser} />}
    </div>
  );
};

export default UserList;
