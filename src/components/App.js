import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !gender || !phoneNumber || !password) {
      setError("All fields are mandatory");
      return;
    }

    const nameRegex = /^[a-z0-9]+$/i;
    if (!nameRegex.test(name)) {
      setError("Name is not alphanumeric");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Phone Number must contain only numbers");
      return;
    }

    setError("");
    setSubmittedName(name.toUpperCase()); // Display name in uppercase
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" id="submit">Submit</button>
      </form>

      {error && <span>{error}</span>}

      {submittedName && <h2>Hello {submittedName}</h2>}
    </div>
  );
};

export default App;
