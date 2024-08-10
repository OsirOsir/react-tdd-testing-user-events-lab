import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    coding: false,
    music: false,
    sports: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckboxChange = (e) => {
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main>
      {/* Existing Portfolio Content */}
      <h1>Hi, I'm Philip</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        {/* Lorem ipsum ... */}
      </p>
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Signup Form */}
      <form onSubmit={handleSubmit}>
        <h3>Sign up for the Newsletter</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.coding}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={interests.music}
              onChange={handleCheckboxChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={interests.sports}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div>
          <h4>Thanks for signing up, {name}!</h4>
          {/* Bonus: Display selected interests */}
        </div>
      )}
    </main>
  );
}

export default App;
