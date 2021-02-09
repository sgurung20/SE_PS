Implement user registration and login functionality with React and Redux.

The home page component is displayed after signing in to the application, it shows the signed in user's name plus a list of all registered users in the tutorial application. The users are loaded into redux state by calling this.props.getUsers() from the componentDidMount() react lifecycle hook, which dispatches the redux action userActions.getAll().

The login page component renders a login form with username and password fields. It displays validation messages for invalid fields when the user attempts to submit the form. If the form is valid, submitting it causes the this.props.login(username, password) to be called, which dispatches the redux action userActions.login(username, password).

The register page component renders a simple registration form with fields for first name, last name, username and password. It displays validation messages for invalid fields when the user attempts to submit the form. If the form is valid, submitting it calls this.props.register(user) which dispatches the redux action userActions.register(user).
