import React from 'react';

// Render the input form to enter a number
class PrimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNum: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputNum: e.target.value
    });
  }

  handleSubmit(e) {
    // alert('Submitted data: ' + this.state.inputNum);
    e.preventDefault();
    const num = this.state.inputNum
    
    // // Naive way to check a prime
    // function isPrime(number) {
    //   if(num < 2) return false;

    //   for (let k = 2; k < num; k++){
    //     if( num % k == 0){
    //       return false;
    //     }
    //   }
    //   return true;
    // }

    function isPrime(number) {
      if (number < 2) return false;
      if (number % 2 == 0) return (number == 2);
      const sqrt = Math.sqrt(number);
      // var i;
      for (let i = 3; i <= sqrt; i += 2) {
          if (number % i == 0) return false;
      }
      return true;
    }

    function findPrimeLoop(oddNumber) {
      while (!isPrime(oddNumber)) {
        oddNumber -= 2;
      }
      return oddNumber
    }

    // Find prime < input number
    function calcPrime(number) {
      var num = parseInt(number);

      if (num < 0) {
        alert('Please input a positive integer!');
        return ''
      }

      if ((num == 0) || (num == 1) || (num == 2)) {
        return 'None'
      }

      if (num == 3) {
        return '2'
      }

      if (num > Number.MAX_SAFE_INTEGER) {
        return 'Input a number less than 2^53 - 1'
      }
      
      if (num % 2 == 0) {
        num -= 1;
        if (isPrime(num)) {
          return num
        } else {
          return findPrimeLoop(num)
        }
      } else {
        if (isPrime(num)) num -= 2;
        return findPrimeLoop(num)
      }


      // Benchmark
      // Freezing browser
      // Failsafe -1 0 1 2 2.2 10e4(99991)

      // Sieve: https://www.geeksforgeeks.org/nearest-prime-less-given-number-n/
      // https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer/20779354#20779354

      // Number.MAX_SAFE_INTEGER: (2^53 - 1) = 9,007,199,254,740,992 / 9007199254740992

      // Number.isInteger(123) //true
      // Number.isInteger(-123) //true
      // Number.isInteger(5-2) //true
      // Number.isInteger(0) //true
      // Number.isInteger(0.5) //false
      // Number.isInteger('123') //false
      // Number.isInteger(false) //false
      // Number.isInteger(Infinity) //false
      // Number.isInteger(-Infinity) //false
      // Number.isInteger(0 / 0) //false
    }

    // // Find prime <= input number
    // function calcPrime(number) {
    //   var num = parseInt(number)

    //   if (num < 0) {
    //     alert('Please input a positive integer!');
    //     return ''
    //   }

    //   if ((num == 0) || (num == 1) || (num == 2)) {
    //     return 'None'
    //   }

    //   if (num > Number.MAX_SAFE_INTEGER) {
    //     return 'Input a number less than 2^53 - 1'
    //   }
      
    //   if (num % 2 == 0) {
    //     num -= 1;
    //     if (isPrime(num)) {
    //       return num
    //     } else {
    //       return findPrimeLoop(num)
    //     }
    //   } else {
    //     return findPrimeLoop(num)
    //   }
    // }

    this.setState({
      answer: calcPrime(num)
    })    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container-fluid nambk-container-input text-center">
        <h2 className="nambk-header">Prime Finder</h2>
        <div className="nambk-header-desc">Highest Prime Number lower than the Input Number</div>

        <label>Input a number:
          <input type="number" value={this.state.inputNum} onChange={this.handleChange} placeholder="Enter a number"/>
        </label>
        <input type="submit" value="Go"/><br/>
        <label>Highest prime #:
          <input type="text" value={this.state.answer} readOnly />   
        </label>
      </form>
    );
  }
}
export default PrimeForm;