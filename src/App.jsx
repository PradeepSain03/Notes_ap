import { useState } from 'react'
import AddToTask from './Component/Add-to-Task'
import Notes from './Component/Notes'
import { CreteContext1 } from './store/createContext'
import Search from './Component/search'



function App() {


  return (
    <CreteContext1>
      <AddToTask />
      <Search />
      <Notes />

    </CreteContext1>
  )
}

export default App
