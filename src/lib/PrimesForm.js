import React from 'react';

// Render the input form to enter two numbers
class PrimesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFirstNum: 1,
      inputLastNum: 1000,
      answer: ['Primes']
    };
    // this.onFirstNumChange = this.onFirstNumChange.bind(this);
    // this.onLastNumChange = this.onLastNumChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // onFirstNumChange(e) {
  //   this.setState({
  //     inputFirstNum: e.target.value
  //   })
  // }

  // onLastNumChange(e) {
  //   this.setState({
  //     inputLastNum: e.target.value
  //   })
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const num1 = Number(this.state.inputFirstNum)
    const num2 = Number(this.state.inputLastNum)
    const max = num1 > num2 ? num1 : num2
    const min = max === num1 ? num2 : num1

    function sieve(limit, initial) {
      var bools = [];
      var primes = [];
      for (let i = 1; i < limit; i++) { bools.push(true); }
      for (let i = 1; i <= Math.sqrt(limit); i++) {
        if (bools[i-2]) {
          for (let j = i*2; j <= limit; j += i) {
            bools[j-2] = false;
          }
        }
      }
      for (let i = 0; i < initial-2; i++) { bools[i] = false; }
      for (let p = 0; p < bools.length; p++) {
        if (bools[p]) { primes.push(p+2); }
      }
      return primes.length === 0 ? ['None in Range'] : primes
    }

    this.setState({
      answer: sieve(max, min),
    });   
  }

  render() {
    return (
      <form id="frmFindPrimes" onSubmit={this.handleSubmit} className="container-fluid nambk-container-input">
        <h2 className="nambk-header">Prime Numbers</h2>
        <div className="nambk-header-desc">Between Two Numbers</div>
        <div>
          <input className="nambk-input" style={{width: '33%'}} 
                 type="number" min="1" max="9999999" aria-label="Input Number"
                 value={this.state.inputFirstNum} onChange={this.handleChange} 
                 id="inputFirstNum" name="inputFirstNum" placeholder="Enter a number"/>
          <input className="nambk-input" style={{width: '33%'}} 
                 type="number" min="1" max="9999999" aria-label="Input Number"
                 value={this.state.inputLastNum} onChange={this.handleChange} 
                 id="inputLastNum" name="inputLastNum" placeholder="Enter a number"/>
          <input id="btnFindPrimes" className="nambk-btn nambk-btn-primary" 
                 type="submit" value="Go"/>
        </div>
        <div id="result" className="mt-3" style={{minHeight: '4rem',}}>
          {this.state.answer.join(', ')}
        </div>   
      </form>
    );
  }
}
export default PrimesForm;