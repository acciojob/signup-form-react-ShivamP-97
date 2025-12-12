import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // Field-specific error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emptyError, setEmptyError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset all errors
    setNameError("");
    setEmailError("");
    setGenderError("");
    setPhoneError("");
    setPasswordError("");
    setEmptyError("");
    setSubmittedName("");

    // Check for empty fields
    if (!name || !email || !gender || !phoneNumber || !password) {
      setEmptyError("All fields are mandatory");
      return;
    }

    // Name validation
    if (!/^[a-zA-Z0-9]+$/.test(name)) {
      setNameError("Name is not alphanumeric");
      return;
    }

    // Email validation
    if (!email.includes("@")) {
      setEmailError("email must contain @");
      return;
    }

    // Gender validation
    if (!["male", "female", "other"].includes(gender.toLowerCase())) {
      setGenderError("Please select gender");
      return;
    }

    // Phone number validation
    if (!/^[0-9]+$/.test(phoneNumber)) {
      setPhoneError("Phone Number must contain only numbers");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must contain atleast 6 letters");
      return;
    }

    // Success
    setSubmittedName(name.toUpperCase());
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
        {nameError && <span data-testid="name-error">{nameError}</span>}

        <input
          data-testid="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span data-testid="email-error">{emailError}</span>}

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
          
          <span data-testid="gender-error">{genderError}</span>


        <input
          data-testid="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {phoneError && <span data-testid="phone-error">{phoneError}</span>}

        <input
          data-testid="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <span data-testid="password-error">{passwordError}</span>}

        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>

      {emptyError && <span data-testid="error">{emptyError}</span>}
      {submittedName && <h2>Hello {submittedName}</h2>}
    </div>
  );
}

export default App;
