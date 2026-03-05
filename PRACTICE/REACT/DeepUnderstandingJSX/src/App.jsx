import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const pets = [
    {
      name: "Jabba",
      type: "cat",
      breed: "persian",
      image: "https://image.petmd.com/files/inline-images/white-cat-breeds-persian.jpg?VersionId=Z44q4gbJlmDXU.rwogXRL4K_P.8kxDO4",
      skill: ["roll", "sleep", "purr"]
    },
    {
      name: "Bruce",
      type: "dog",
      breed: "bullpit",
      image: "https://live.staticflickr.com/65535/48423949212_09b0186f0a_b.jpg",
      skill: ["play", "eat", "bark"]
    }
  ];
  

  return (
    <>
      <div className = "App">
        <h1>My Pets</h1>
        <ul className = "container">
          {
            pets.map((pet, index) => (
              <li key = {index}>
                <h1>{pet.name}</h1>
                <p>{pet.breed}</p>
                <img src = {pet.image} alt= {pet.type} width= "200px" height= "300px"></img>
                <ul className = "skills">
                  {
                    pet.skill.map((skill,index) => (
                      <li key = {skill}>{skill}</li>
                    ))
                  }
                </ul>
              </li>

                
            ))
          }
        </ul>
      </div>
      
    </>
  );
}

export default App
