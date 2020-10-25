import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [actor, setActor] = useState([]);

  function sortByPop() {
    let updatedList = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setActor(updatedList);
  }

  function sortByName() {
    let updatedList = [...contacts].sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setActor(updatedList);
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={sortByPop}>By Popularity</button>
      <button onClick={sortByName}>By Name</button>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Picture</th>
          <th>Rating</th>
        </tr>

        {actor.map((eachContact) => (
          <tr key={eachContact.name}>
            <td>
              <img
                src={eachContact.pictureUrl}
                alt={eachContact.name}
                style={{ height: "200px" }}
              />
            </td>
            <td>{eachContact.name}</td>
            <td>{eachContact.popularity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
