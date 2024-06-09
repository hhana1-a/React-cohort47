import './App.css';
import PersonController from './personController.jsx';
import Person from './person.jsx';
import Button from './Button.jsx';

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