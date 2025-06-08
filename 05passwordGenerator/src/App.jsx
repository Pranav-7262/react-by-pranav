import { useState, useCallback, useEffect, useRef } from "react";

// import "./App.css";

function App() {
  const [length, setLength] = useState(8); // this state will determine the length of the password
  const [numberAllowed, setNumberAllowed] = useState(false); // this state will determine if numbers are allowed in the password
  const [characterAllowed, setCharacterAllowed] = useState(false); //this state will determine if special characters are allowed in the password
  const [password, setPassword] = useState(""); //this state will hold the generated password

  //useRef hook variable
  const passwordRef = useRef(null); //this hook will be used to reference the input field for the password so that we can copy its value to the clipboard.

  const generatePassword = useCallback(() => {
    //  this function generates a random password based on the selected options
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select(); //using hook with copying effect
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    //this hook will run when the component mounts and whenever the dependencies change
    generatePassword();
  }, [length, numberAllowed, characterAllowed, setPassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-1 py-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-3 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed} //this means if the checkbox is checked, the state will be true and if it is unchecked, the state will be false
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); //this means if the previous state is true, it will be set to false and vice versa . in short it updates the state to the opposite of its previous value
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed} //this means if the checkbox is checked, the state will be true and if it is unchecked, the state will be false
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev); //this means if the previous state is true, it will be set to false and vice versa . in short it updates the state to the opposite of its previous value
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
