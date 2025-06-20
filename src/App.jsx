import React from 'react'
import './App.css'
import Card from './components/cards'
import Counter from './components/counter'
import ToggleButton from './components/toggleButton'
import NameForm from './components/nameForm'

function App() {

  const items = ["Item 1", "Item 2", "Item 3"]
  return (
    <>
      <div>
        <h1>List Of Items</h1>
        <Card title= "Card 1" description="This is the first card" />
        
        <ul>
          {
            items.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>

        <Counter />

        <ToggleButton />

        <NameForm />

      </div>
      
    </>
  )
}

export default App
