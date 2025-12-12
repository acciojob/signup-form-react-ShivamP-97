import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male"); // default value
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");  // clear previous error
    setWelcomeMsg(""); // clear previous welcome message

    // 1. Check all fields filled
    if (!name || !email || !gender || !phoneNumber || !password) {
      setError("All fields are mandatory");
      return;
    }

    // 2. Name alphanumeric
    const nameRegex = /^[a-zA-Z0-9 ]+$/;
    if (!nameRegex.test(name)) {
      setError("Name is not alphanumeric");
      return;
    }

    // 3. Email must contain @
    if (!email.includes("@")) {
      setError("email must contain @");
      return;
    }

    // 4. Gender validation
    if (!["Male", "Female", "Other"].includes(gender)) {
      setError("Please identify as Male, Female or Other");
      return;
    }

    // 5. Phone number numeric
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Phone Number must contain only numbers");
      return;
    }

    // 6. Password length
    if (password.length < 6) {
      setError("Password must contain atleast 6 letters");
      return;
    }

    // If all validations pass, extract username from email
    const username = email.split("@")[0];
    setWelcomeMsg(`Hello ${username}`);
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            data-testid="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            data-testid="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            data-testid="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            data-testid="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" data-testid="submit">Submit</button>
      </form>

      {/* Error Message */}
      {error && <span>{error}</span>}

      {/* Welcome Message */}
      {welcomeMsg && <h2>{welcomeMsg}</h2>}
    </div>
  );
};

export default App;
