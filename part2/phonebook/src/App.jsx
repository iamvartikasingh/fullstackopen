import { useState } from 'react'


const Persons = ({ persons, search }) => {
  const namesToShow = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul>
      {namesToShow.map(person => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};


const Filter = ({ onSearchChange, search }) => {

  return (
    <div>
      Filter shown with <input value={search} onChange={onSearchChange} />
      
    </div>
  );
};
const PersonForm = ({ value, onChange, onNumberChange, onSubmit, numbervalue }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        Name: <input value={value} onChange={onChange} />
      </div>
      <div>
        Number: <input value={numbervalue} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) ;
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState("");

  
const addName= (event) =>{
  event.preventDefault()

  const duplicates = persons.filter(person => person.name === newName);
  if(duplicates.length>0){
    alert(`${newName} is already added to phonebook`)

  } else{
  const nameObject = {
    name: newName,
 number: newNumber,
    important: Math.random()<0.5,
    id:String(Date.now()),

  }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
}
 
}
const handleChange = (event) => {
  setNewName(event.target.value)

}
const handleNumberChange = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)
}
const handleSearchChange = (event) => {
  setSearch(event.target.value);
};


return (
    <div>
      <h2>Phonebook</h2>

<Filter  onSearchChange={handleSearchChange} search={search}/>

<h2>add New</h2>
<PersonForm value={newName} onChange={handleChange}
onNumberChange ={handleNumberChange} onSubmit={addName} numbervalue={persons.number} /> 
   
      <h2>Numbers</h2>

<Persons persons={persons} search={search}/>    
    </div>
  )
}

export default App