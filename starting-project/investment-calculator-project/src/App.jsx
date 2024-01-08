import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
});

//유효값 설정
const inputIsValid = userInput.duration>=1;

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return{
          ...prevUserInput,
          [inputIdentifier]:+newValue //문자열을 숫자값으로 변환할 것을 명시
      }
  });
}

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid&& <p className="center">Please enter a duration greater then zero.</p>}
     {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
