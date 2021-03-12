import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment'
import NoteDataService from './api/note/NoteDataService.js'
import AuthenticationService from './AuthenticationService.js'

class NoteComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id, 
            description: '',
            date : moment(new Date()).format('YYYY-MM-DD')
        }   
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }


    componentDidMount(){
        // console.log('did mount')

        if(this.state.id===-1){
            return
        }
        let username = AuthenticationService.getLoggedInUsername()
        NoteDataService.retreiveNote(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                date: moment(response.data.date).format('YYYY-MM-DD')
            }))
    }
    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a description'
        } else if(values.description.length<5) {
            errors.description = 'Enter at least five characters in description'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid date'
        }

        return errors
    }
    onSubmit(values){
        let username = AuthenticationService.getLoggedInUsername()

        if(this.state.id===-1){
            NoteDataService.createNote(username, {
            id: this.state.id,
            description: values.description,
            date: values.date
            }).then(() => this.props.history.push('/notes')) 
        }else
        {
        NoteDataService.updateNote(username, this.state.id, {
            id: this.state.id,
            description: values.description,
            date: values.date
        }).then(() => this.props.history.push('/notes'))
        }

        
        console.log(values);
}

    render() {
        let {description, date} = this.state
        //let date = this.state.date
      return (
        <div>
            <h1>Note</h1>
            <div className="container">
                <Formik
                    initialValues={{description,date}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >             
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" 
                                                    className="alert alert-warning"/>
                                <ErrorMessage name="date" component="div" 
                                                    className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>date</label>
                                    <Field className="form-control" type="date" name="date"/>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
      )
  }        
}
export default NoteComponent