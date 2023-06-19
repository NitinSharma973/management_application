import React, { useState } from "react";
import "./UserForm.css"; // Add this line
const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }
    // Add new user
    addUser({ name, email, phone });
    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
