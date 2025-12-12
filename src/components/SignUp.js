import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [welcome, setWelcome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setWelcome("");

    if (!name || !email || !phoneNumber || !password) {
      setError("All fields are mandatory");
      return;
    }

    const nameRegex = /^[a-zA-Z0-9 ]+$/;
    if (!nameRegex.test(name)) {
      setError("Name is not alphanumeric");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    if (!["male", "female", "other"].includes(gender)) {
      setError("Please identify as male, female or others");
      return;
    }

    if (isNaN(phoneNumber)) {
      setError("Phone Number must contain only numbers");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain atleast 6 letters");
      return;
    }

    const username = email.split("@")[0];
    setWelcome(`Hello ${username}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          data-testid="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          data-testid="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        <input
          data-testid="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <input
          data-testid="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>

      {error && <span>{error}</span>}
      {welcome && <h2>{welcome}</h2>}
    </div>
  );
}

export default Signup;
