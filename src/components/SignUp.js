import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [welcome, setWelcome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setWelcome("");

    if (!name || !email || !phoneNumber || !password) {
      setError("All fields are mandatory.");
      return;
    }

    const nameRegex = /^[a-zA-Z0-9 ]+$/;
    if (!nameRegex.test(name)) {
      setError("Name is not alphanumeric.");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must contain @.");
      return;
    }

    const validGenders = ["Male", "Female", "Other"];
    if (!validGenders.includes(gender)) {
      setError("Please identify as male, female or others.");
      return;
    }

    if (isNaN(phoneNumber)) {
      setError("Phone Number must contain only numbers.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain atleast 6 letters");
      return;
    }

    const username = email.substring(0, email.indexOf("@"));
    setWelcome(`Hello ${username}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          data-testid="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <select
          data-testid="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          data-testid="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />

        <input
          data-testid="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>

      {error && <span>{error}</span>}
      {welcome && <span>{welcome}</span>}
    </div>
  );
}

export default Signup;
