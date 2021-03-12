import React, {Component} from 'react'
import NoteDataService from './api/note/NoteDataService.js'
import AuthenticationService from './AuthenticationService.js'
class ListNotesComponent extends Component {
    constructor(props){
        console.log('constructor')
        super(props) 
        this.state = {
            notes : [],
            message : null
            
        }
        this.deleteNoteClicked = this.deleteNoteClicked.bind(this)
        this.updateNoteClicked = this.updateNoteClicked.bind(this)
        this.refreshNotes = this.refreshNotes.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount(){
        console.log('componentDidMount')
        let name = AuthenticationService.getLoggedInUsername()
        //console.log(name,"name")
        NoteDataService.retreiveAllNotes(name)
            .then(
                response => {
                   // console.log(response)
                   this.setState({notes: response.data})
                }
            )
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    refreshNotes() {
        let username = AuthenticationService.getLoggedInUsername()
        NoteDataService.retreiveAllNotes(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ notes: response.data })
                }
            )
    }

    deleteNoteClicked(id){
        let username = AuthenticationService.getLoggedInUsername()
       // console.log(id + " " + username)
        NoteDataService.deleteNote(username, id)
        .then (
            response => {
                this.setState({message: `Delete of note ${id} Successful`})
                this.refreshNotes()
            }
        )
    }

    addTodoClicked(){
        this.props.history.push(`/notes/-1`)
    }
    
    updateNoteClicked(id){
        console.log('update '+ id)
        this.props.history.push(`/notes/${id}`)
        // let username = AuthenticationService.getLoggedInUsername()
        // console.log(id + " " + username)
    }
    

    render(){
        console.log('render')
        return (<div>
            <h1>Notes List</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>description</th>
                        <th>date</th>
                        <th>update</th>
                        <th>delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.notes.map(
                            note =>
                            <tr key={note.id}>
                                <td>{note.description}</td>
                                <td>{note.date.toString()}</td>
                                <td><button className="btn btn-success" onClick={() => this.updateNoteClicked(note.id)}>update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteNoteClicked(note.id)}>delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="row">
                <button className="btn btn-success" onClick={this.addTodoClicked}>add</button>


            </div>
            </div>
        </div>
        )
    }
}

export default ListNotesComponent