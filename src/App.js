import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = ({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPerson: false
  })

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 100 },
        { name: 'BBB', age: 200 },
        { name: 'CCC', age: 300 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const update = this.state.persons({
      
    })
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonHandler = (event) => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Keep Practicing</h1>
        <button onClick={this.switchNameHandler.bind(this, "Sam")}>Change Values</button>
        <button onClick={this.togglePersonHandler}>Show Persons</button>
        { this.state.showPerson ? <div>
          <Person
            person={this.state.persons}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler}
          />
        </div> : null}
      </div>
    );
  }

}

export default App;