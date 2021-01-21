class App extends React.Component {

    state = {
        baseURL: 'http://jservice.io/api/random',
        question:[],
        showHideAnswer:false,
        score:0
  }

  //this method fetches questions from API as json objects. We are using the API's random question option as in the base url above.
    handleFetchQuestion() {
         console.log("handleFetchQuestion");
        fetch(this.state.baseURL)
        .then((response) => response.json())
        .then(json => {
             console.log(json);
            this.setState({ question: json }),
            err => console.log(err)
        }
      )
    }

   //this method is used to toggle the state of showHideAnswer.
    showHideAnswer() {
        this.setState({ showHideAnswer: !this.state.showHideAnswer });
  }

  //this method will manually increase the score based on the question's value points.
   increaseScore(){
     const score = (this.state.question.map(values => (values.value)));
     console.log("from API: " + score);
     console.log("from state constructor: " + parseInt(this.state.score));
     let newScore = parseInt(score) + parseInt(this.state.score);
     console.log("API + state constructor: " + newScore);
     console.log("setState: ");
     this.setState({
       score: newScore});
   }
   //this method will manually decrease the score based on the question's value points.
   decreaseScore(){
     const score = (this.state.question.map(values => (values.value)));
     console.log("from API: " + score);
     console.log("from state constructor: " + parseInt(this.state.score));
     let newScore = parseInt(this.state.score) - parseInt(score);
     console.log("API + state constructor: " + newScore);
     console.log("setState: ");
     this.setState({
       score: newScore});
   }

  //this method will reset the score to zero
   reset(){
     console.log("reset");
     this.setState({score: 0,
                    question:[],
                    showHideAnswer:false});
     }


    render() {
      //another way to write this: const {showHideAnswer} = this.state :is
      //const  showHideAnswer = this.state.showHideAnswer;
      const {showHideAnswer} = this.state;
      const question = (this.state.question.map(question => (question.question)));
      const title = (this.state.question.map(title => (title.category.title)));
      const point = (this.state.question.map(point => (point.value)));
      const answer = (this.state.question.map(answer => (answer.answer)));

        return (
            <div>
            <h1>Welcome to Jeopardy!</h1>
            <label className="score" htmlFor='score'>Score: {this.state.score}</label>
            <button className="button1" onClick={() => this.decreaseScore()}>Decrease</button>
            <button className="button2" onClick={() => this.increaseScore()}>Increase</button>
            <button className="button3" onClick={() => this.reset()}>Reset</button>
            <h2>Let's Play!</h2>
            <button className="button4" onClick={() => this.handleFetchQuestion()}>Get Question</button><br />
            <div className="question">{question}</div><br />
            <div><label className="category" htmlFor='category'>Category: {title}</label></div><br />
            <div><label className="point" htmlFor='point'>Point: {point}</label></div><br /><br />
            <button className="button5" onClick={() => this.showHideAnswer()}>Answer</button><br /><br />
            {showHideAnswer && (<div className="answer">{answer}</div> )}
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
