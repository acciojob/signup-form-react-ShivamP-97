import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate all fields
    if (!name || !email || !gender || !phoneNumber || !password) {
      setError("All fields are mandatory");
      return;
    }

    // Name validation (alphanumeric)
    if (!/^[a-zA-Z0-9]+$/.test(name)) {
      setError("Name is not alphanumeric");
      return;
    }

    // Email validation (must contain @)
    if (!email.includes("@")) {
      setError("email must contain @");
      return;
    }

    // Gender validation
    if (!["male", "female", "other"].includes(gender.toLowerCase())) {
      setError("Please select gender"); // Appears in <span>
      return;
    }

    // Phone number validation (numbers only)
    if (!/^[0-9]+$/.test(phoneNumber)) {
      setError("Phone Number must contain only numbers");
      return;
    }

    // Password validation (at least 6 letters)
    if (password.length < 6) {
      setError("Password must contain atleast 6 letters");
      return;
    }

    // If everything passes
    setSubmittedName(name.toUpperCase()); // Cypress expects uppercase
    setError("");
  };

  return (
    <div className="App">
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          data-testid="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          data-testid="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          data-testid="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          data-testid="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
