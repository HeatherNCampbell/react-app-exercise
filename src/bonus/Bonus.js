// BONUS
// 6a
import { useState } from 'react'

// 6b
const Bonus = () => {
  // 6d
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // 6f
  const [letter, setLetter] = useState(0);

  // 6e
  return (
    <div>
      <h1>{letters[letter]}</h1>
      <button onClick={() => letter < (letters.length - 1) ? setLetter(letter + 1) : setLetter(0)}>NEXT LETTER</button>
    </div>
  );
}

// 6c
export default Bonus;









//BONUS  6a. 6b. 6c. 6d. 6e. 6f.


//6e. Inside the Bonus function component use the return keyword to have it return an h1 and a button (Set the text for the button to "NEXT LETTER")
//6f. Using State as well as an onClick Event, have the letter A display in the h1 when the page loads and change to the next letter in the alphabet each time the button is pressed.
//6g. Open the App.js file and create the Bonus import below the Exercise import at the top of the file
//6h. Inside the return for the App component, pass in the Bonus component below the Exercise component so it will render to the browser