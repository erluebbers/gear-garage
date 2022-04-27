import '../App.css';
import React, { useState } from "react";

function NewGearForm( {gear, setGear} ) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [condition, setCondition] = useState(null)

  const handleNewItem = (newItem) => {
    setGear([...gear, newItem])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        condition: condition,
      }),
    })
    .then(r => r.json())
    .then(newItem => {
      handleNewItem(newItem)
      setName("")
      setDescription("")
      event.target.reset()
    })
  }

  return (
    <div>
      <h3>Get some new gear? Add it to the library here:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name..."
        >
        </input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter item description..."
        >
        </input>
        <label htmlFor="condition">condition</label>
        <select onChange={(e) => setCondition(e.target.value)} name="condition" id="condition">
          <option value="Condition">Select Condition (1-5)</option>
          <option value="1">1 (poor)</option>
          <option value="2">2 (usable)</option>
          <option value="3">3 (good)</option>
          <option value="4">4 (great)</option>
          <option value="5">5 (excellent)</option>
        </select>
        <button type="submit">Submit</button>      
      </form>
    </div>
  );
}

export default NewGearForm;