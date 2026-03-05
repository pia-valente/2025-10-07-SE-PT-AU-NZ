import { useState, useEffect } from "react"; //dont forget to import useEffect

function Greeting() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 5) + 1,
  );
  const [greeting, setGreeting] = useState (" ")

  useEffect(() => {
    console.log("Random Greeting!");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("random", randomNumber); //saves data in the browser so it persists even if the page is refreshed or the browser is closed and reopened.
    switch (randomNumber) {
        case 1:
            setGreeting("Hello");
            break;
        case 2:
            setGreeting("Bonjour");
            break;
        case 3:
            setGreeting("Ni Hao");
            break;
        case 4:
            setGreeting("Buenos Dias");
            break;
        case 5:
            setGreeting("Kia ora");
            break;
    }
  }, [randomNumber]); //randomNumber is State



  return (
    <div className="Greeting">
      <h1>Random Greeting</h1>
        { greeting }
    </div>
  );
}

export default Greeting;


//There is a random greeting every time the page is refreshed