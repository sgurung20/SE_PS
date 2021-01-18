class Header extends React.Component{
  render(){
    return (
      <div className="titleheader">
      <h1>Dashboard Creation!</h1>
      </div>
    )
  }
}

class Reviews extends React.Component {
  render () {
    return (
      <section>
        <code>
        <h3 id="SAheader">Reviews</h3>
        <h4>1,281</h4>
        </code>
      </section>
    )
  }
}

class AvgRating extends React.Component {
  render () {
    return (
      <section>
        <code>
        <h3 id="SAheader">Average Rating</h3>
        <h4>4.6</h4>
        </code>
      </section>
    )
  }
}

class SentimentAnalysis extends React.Component {
  render () {
    return (
      <section>
        <div className = 'sentimentAnalysis'>
        <h3 id="SAheader">Sentiment Analysis</h3>
        <h4>960</h4>
        <h4>122</h4>
        <h4>321</h4>
        </div>
      </section>
    )
  }
}

class Sidebar extends React.Component {
  render () {
    return (
      <aside>
      <h3>Dashboard </h3>
      <h3>Widget </h3>
      <h3>Reviews </h3>
      <h3>Customers </h3>
      <h3>Online Analysis </h3>
      <h3>Settings </h3>
      </aside>
    )
  }
}

class BlankComponent extends React.Component {
  render () {
    return (
      <div className='blankcomponent'>
      </div>
    )
  }
}

class WebsiteVisitors extends React.Component {
  render () {
    return (
      <article>
        <code>
        <h3 id="SAheader">Website Visitors</h3>
        <h4>821 </h4>
        <BlankComponent />
        </code>
      </article>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <Sidebar />
      <Reviews />
      <AvgRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
