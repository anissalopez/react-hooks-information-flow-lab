import React from "react";

function Header({onDarkModeClick, DarkMode}){
    
    
   return(
    <div>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
      {DarkMode ? "Dark" : "Light"} Mode
    </button>
    </div>

   ) 
}

export default Header;