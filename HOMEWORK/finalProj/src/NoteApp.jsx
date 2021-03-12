import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ListNotesComponent from './ListNotesComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent'
import LoginComponent from './LoginComponent'
import NoteComponent from './NoteComponent.jsx'

class NoteApp extends Component {
    render() {
        return (
            <div className="NoteApp">

                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/notes/:id" component={NoteComponent}/>
                    <AuthenticatedRoute path="/notes" component={ListNotesComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

export default NoteApp
