import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = ({
    persons: [
      { id: 100, name: 'Max', age: 28 },
      { id: 200, name: 'Manu', age: 29 },
      { id: 300, name: 'Stephanie', age: 26 }
    ],
    showPerson: false
  })

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 100, name: 'Max', age: 28 },
        { id: 200, name: 'Manu', age: 29 },
        { id: 300, name: 'Stephanie', age: 26 }
      ],
    })
  }

  nameChangeHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => p.id === id)
    let persons = [...this.state.persons][personIndex]
    persons.name = event.target.value
    
    this.setState({
      persons: this.state.persons
    })
  }

  togglePersonHandler = (event) => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }
  
  render() {
    let people = null;

    if (this.state.showPerson) {
      people = this.state.persons.map(person => {
        return (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            age={person.age}
            click={this.switchNameHandler}
            nameChangeHandler={this.nameChangeHandler}
          />
        )
      })
    }

    return (
      <div className="App">
        <h1>Keep Practicing</h1>
        <button onClick={this.switchNameHandler}>Change Values</button>
        <button onClick={this.togglePersonHandler}>Show Persons</button>
        {people}
      </div>
    );
  }

}

export default App;