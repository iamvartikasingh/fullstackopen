import { useState } from 'react'


const Filter= (props) =>{
let name = props.name;
const [search, setSearch] = useState('')
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
const handleSearchChange = (event) => {
  console.log(event.target.value)
  setSearch(event.target.value)

}
return(

  <div>
  filter shown with <input value={search} onChange={handleSearchChange }/>

</div>

)
}

const PersonForm = {(value, onChange)} => {

const name=value.name;


return(
  <form onSubmit={addName}>
  <div>
    Name: <input value={newName}
              onChange={handleChange}

    />
      </div>
      <div>
              Number: <input value={newNumber}
              onChange={handleNumberChange}
              />
      </div>
 
  <div>
    <button type="submit">add</button>
  </div>
</form>
)

}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) ;
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  
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

  return (
    <div>
      <h2>Phonebook</h2>

<Filter props={persons} />

<h2>add New</h2>
<PersonForm name={persons.name} onChange={handleChange}
onNumberChange ={handleNumberChange} />
   
      <h2>Numbers</h2>
      <ul>
      {namesToShow.map(person => (
          <li key={person.id}>{person.name}  {person.number}</li>

        ))}
 
      </ul>
    </div>
  )
}

export default App