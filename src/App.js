import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
  })

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'AAA', age: 100 },
        { name: 'BBB', age: 200 },
        { name: 'CCC', age: 300 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Keep Practicing</h1>
      <button onClick={switchNameHandler}>Change Values</button>
      <Person person={personsState.persons}/>
    </div>
  );

}

export default app;