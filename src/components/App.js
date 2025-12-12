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
    setSubmittedName(name.toUpperCase());
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            data-testid="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            data-testid="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <select
            data-testid="gender"
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
            data-testid="phoneNumber"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            data-testid="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" data-testid="submit">Submit</button>
      </form>

      {error && <span data-testid="error">{error}</span>}

      {submittedName && <h2 data-testid="greeting">Hello {submittedName}</h2>}
    </div>
  );
};

export default App;
