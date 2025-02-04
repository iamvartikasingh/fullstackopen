import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id:'1',
      number: '00-00-0000',
    }
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
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name}  {person.number}</li>

        ))}
 
      </ul>
    </div>
  )
}

export default App