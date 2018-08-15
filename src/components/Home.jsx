import React from 'react'; // eslint-disable-line no-unused-vars

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      verdict: null,
    };
    this.handleClickRick = this.handleClickRick.bind(this);
    this.handleClickMorty = this.handleClickMorty.bind(this);
  }

  handleClickRick() {
    const quotes = this.props.quotes;
    
    const quotesRick = quotes.filter(quote => quote.includes('-Rick'));
    const randomQuoteRick = quotesRick[Math.floor(Math.random() 
      * quotesRick.length)];
    
    this.setState({
      quote : `"${randomQuoteRick}"`,
      verdict: 'I Like What You Got!!'
    });
  }

  handleClickMorty() {
    const quotes = this.props.quotes;
    
    const quotesMorty = quotes.filter(quote => quote.includes('-Morty'));
    const randomQuoteMorty = quotesMorty[Math.floor(Math.random() 
      * quotesMorty.length)];
    
    this.setState({
      quote : `"${randomQuoteMorty}"`,
      verdict: 'I Like What You Got!!'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rick And Morty Quotes</h1>
        </header>
        <div className="quote-box">
          {this.state.quote}
        </div>
        <div className="character-line">
          <div >
            <div>
              <button className="myButton" onClick={this.handleClickRick}>
                Rick Quote
              </button>
            </div>
            <img className="rick" src='/img/rick.jpg' alt='rick' />            
          </div>
          <div className="align-top">
            <img className="show-me" src='/img/showmewhatyougot.png' alt='show-me' />
            <div className="verdict">
              {this.state.verdict}
            </div>
          </div>
          <div>
            <div>
              <button className="myButton" onClick={this.handleClickMorty}>
                Morty Quote
              </button>
            </div>
            <img className="morty" src='/img/morty.png' alt='morty' />
          </div>
        </div>
      </div>
    );
  }
}