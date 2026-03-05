import { useState } from "react";
import "../App.css";

function Colorizer() {

    //useState
    const [color, setColor] = useState("#6d0e0e"); 
    
    //function to get random color
    function getRandomColor () {
        const random = `#${Math.floor(Math.random()*16777215).toString(16)}`
        return random;
    }
        
    //function to change color. 
    function changeColor () { 
        const randomColor = getRandomColor()
        console.log("Color Change"); //inspect element will show that this is working
        setColor(randomColor); //when button is click, it will change its color
    }

    return (
        <div className="Colorizer">
            <div className = "Box" style = {{backgroundColor: color}}></div>
            <button onClick = {changeColor}>Change Color</button>
        </div>
    );
}

export default Colorizer;
