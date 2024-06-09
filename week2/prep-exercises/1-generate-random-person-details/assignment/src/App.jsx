import './App.css';
import PersonController from './personController.js';
import Person from './person.js';
import Button from './Button.js';

function App() {
  const { personData, getNewPerson } = PersonController();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Person Info</h1>
        <Person personData={personData} />
        <Button onClick={getNewPerson} />
      </header>
    </div>
  );
}

export default App;