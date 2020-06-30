import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      quote: "",
      author: ""
    }
    this.getQuote = this.getQuote.bind(this);
  }
  componentDidMount() {
    this.getQuote();
  }
  async getQuote() {

    const response = await fetch("http://api.quotable.io/random").then(data => data.json())
      .then(data => {
        return {
          content: data.content,
          author: data.author
        }
      }).catch(err => console.log(err))

    console.log(response);
    this.setState({ quote: response.content, author: response.author })
  }

  render() {


    return (
      <div id="quote-box">
        <h1 id="text">{this.state.quote ? this.state.quote : "Quote of the Day"}</h1>
        <h5 id="author">{this.state.author ? this.state.author : "Author"}</h5>
        <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet"> Tweet Quote</a>
        <button id="new-quote" onClick={this.getQuote}>Click me for a Random Quote !</button>
      </div >
    )

  }

}

export default App;
