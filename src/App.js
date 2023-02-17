import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import heroes from "./components/heroes";

function App() {
  return (
    <div className="App">
      <div className="heroes-container">
        {heroes.map((hero) => (
          <Hero
            name={hero.name}
            image={hero.image}
            universe={hero.universe}
            alterego={hero.alterego}
            business={hero.business}
            friends={hero.friends}
            superpowers={hero.superpowers}
            details={hero.details}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
