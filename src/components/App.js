import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // reset error

    // Validate all fields
    if (!name || !email || !gender || !phoneNumber || !password) {
      setError("All fields are mandatory");
      return;
    }

    if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      setError("Name is not alphanumeric");
      return;
    }

    if (!email.includes("@")) {
      setError("email must contain @"); // lowercase 'email' for Cypress test
      return;
    }

    if (!["male", "female", "other"].includes(gender.toLowerCase())) {
      setError("Please select gender");
      return;
    }

    if (!/^[0-9]+$/.test(phoneNumber)) {
      setError("Phone Number must contain only numbers");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setSubmittedName(name.toUpperCase()); // Cypress expects uppercase
    setName("");
    setEmail("");
    setGender("");
    setPhoneNumber("");
    setPassword("");
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            data-testid="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            data-testid="email"
            type="text"
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
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            data-testid="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            data-testid="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>

      {error && <span data-testid="error">{error}</span>}

      {submittedName && <h2>Hello {submittedName}</h2>}
    </div>
  );
}

export default App;
