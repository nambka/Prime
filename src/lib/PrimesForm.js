import React, { useState } from 'react';
import { sieve } from './Algo'

// Render the input form to enter two numbers
// Multiple inputs: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
const PrimesForm = () => {
  const [states, setState] = useState({
    inputFirstNum: 1,
    inputLastNum: 1000
  });
  const [answer, setAnswer] = useState(['Primes']);

  const handleChange = (e) => {
    const val = e.target.value;
    setState({
      ...states,
      [e.target.name]: val
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const num1 = Number(states.inputFirstNum)
    const num2 = Number(states.inputLastNum)
    const max = num1 > num2 ? num1 : num2
    const min = max === num1 ? num2 : num1
    setAnswer(sieve(max, min));   
  }

  return (
    <form id="frmFindPrimes" onSubmit={handleSubmit} className="container-fluid nambk-container-input">
      <h2 className="nambk-header">Prime Numbers</h2>
      <div className="nambk-header-desc">Between Two Numbers</div>
      <div>
        <input className="nambk-input" style={{width: '33%'}} 
                type="number" min="1" max="9999999" aria-label="Input Number"
                value={states.inputFirstNum} onChange={handleChange} 
                id="inputFirstNum" name="inputFirstNum" placeholder="Enter a number"/>
        <input className="nambk-input" style={{width: '33%'}} 
                type="number" min="1" max="9999999" aria-label="Input Number"
                value={states.inputLastNum} onChange={handleChange} 
                id="inputLastNum" name="inputLastNum" placeholder="Enter a number"/>
        <input id="btnFindPrimes" className="nambk-btn nambk-btn-primary" 
                type="submit" value="Go"/>
      </div>
      <div id="result" className="mt-3" style={{minHeight: '4rem',}}>
        {answer.join(', ')}
      </div>   
    </form>
  );
}
export default PrimesForm;