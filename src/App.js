import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [actor, setActor] = useState([]);

  function sortByPop() {
    console.log("hi");
    let updatedList = [...contacts].sort((x, y) => y.popularity - x.popularity);
    setActor(updatedList);
  }
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={sortByPop}>By Popularity</button>
      {actor.map((eachContact) => {
        return (
          <ul>
            <img
              src={eachContact.pictureUrl}
              alt={eachContact.name}
              style={{ height: "200px" }}
            />
            <li>{eachContact.name}</li>
            <li>{eachContact.popularity}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
