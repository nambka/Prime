import React from 'react';

// Render the input form to enter two numbers
class PrimesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFirstNum: 1,
      inputLastNum: 1000000,
      answer: ['Primes']
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
      for (var i = 1; i < limit; i++) { bools.push(true); }
      for (var i = 1; i <= Math.sqrt(limit); i++) {
        if (bools[i-2]) {
          for (var j = i*2; j <= limit; j += i) {
            bools[j-2] = false;
          }
        }
      }
      for (var i = 0; i < initial-2; i++) { bools[i] = false; }
      for (var p = 0; p < bools.length; p++) {
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
      <form onSubmit={this.handleSubmit} className="container-fluid nambk-container-input">
        <h2 className="nambk-header">Prime Numbers</h2>
        <div className="nambk-header-desc">Between Two Numbers</div>

        <input type="number" min="1" max="9999999" value={this.state.inputFirstNum} onChange={this.handleChange} id="inputFirstNum" name="inputFirstNum" placeholder="Enter a number"/>
        <input type="number" min="1" max="9999999" value={this.state.inputLastNum} onChange={this.handleChange} id="inputLastNum" name="inputLastNum" placeholder="Enter a number"/>
        <input type="submit" value="Go"/>
        <div className="mt-3" style={{
            backgroundColor: '#cde2', 
            padding: '5px 10px', 
            width: '100%', 
            flex: '1', 
            boxSizing: 'border-box',
            minHeight: '60px', 
            borderRadius: '7px', 
          }}>
          {this.state.answer.join(', ')}
        </div>   
      </form>
    );
  }
}
export default PrimesForm;