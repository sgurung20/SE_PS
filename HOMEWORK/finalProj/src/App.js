import React, {Component} from 'react'
import './App.css'
import NoteApp from './NoteApp.jsx'
import './bootstrap.css'

class App extends Component{
  render(){
    return(
      <div className="App">
        <NoteApp/>
      </div>
    )
  }
}

export default App;
