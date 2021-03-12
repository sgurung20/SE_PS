import axios from 'axios'

class NoteDataService{
    
    retreiveAllNotes(name){
        // console.log('executed service')
        return axios.get(`http://localhost:8080/users/${name}/notes`)
    }

    retreiveNote(name, id){
        // console.log('executed service')
        return axios.get(`http://localhost:8080/users/${name}/notes/${id}`)
    }

    deleteNote(name, id){
        // console.log('executed service')
        return axios.delete(`http://localhost:8080/users/${name}/notes/${id}`)
    }

    updateNote(name, id, note){
        // console.log('executed service')
        return axios.put(`http://localhost:8080/users/${name}/notes/${id}`, note)
    }

    createNote(name, note){
        // console.log('executed service')
        return axios.post(`http://localhost:8080/users/${name}/notes/`, note)
    }



}

export default new NoteDataService()