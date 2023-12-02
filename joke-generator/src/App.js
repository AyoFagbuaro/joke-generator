import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetchJoke();
  };

  const fetchJoke = async () => {
    await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joke generator</h1>

        <h2>{joke}</h2>
        <button onClick={generateJoke}>generate joke</button>
      </header>
    </div>
  );
}

export default App;
