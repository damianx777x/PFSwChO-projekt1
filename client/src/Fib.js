import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    answear: ''
  };

  componentDidMount() {
    this.fetchValues();
   
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    if(this.state.index=="" || isNaN(this.state.index) || parseInt(this.state.index)>20)
    {
      this.setState({answear:"Podano niepoprawny argument"})
    }
    else{
    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({answear:'Poprawnie obliczono wartosc'})
    this.setState({ index: '' });
    await this.fetchValues();
  }
    
  };





  handleHistory = async (event)=> {
    event.preventDefault();
    await this.fetchIndexes();
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderAnswear() {
    return this.state.answear;
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          Dla argumentu {key} wartosc ciagu Fibonacciego wynosi {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Podaj argument dla ktorego ma zostac obliczona wartosc ciagu Fibonacciego:</label>
          <br/>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <br/>
          <button type="submit">Oblicz</button>
        </form>
        {this.renderAnswear()}
        
        

        <br/>
        <form onSubmit={this.handleHistory}> 
        <button type="submit"  >Wyswietl wpisywane indeksy:</button>
        </form>
        <br/>
        {this.renderSeenIndexes()}


        <h3>Obliczone elementy ciagu Fibonacciego:</h3>
        {this.renderValues()}
        <footer> Politechnika Lubelska 2022 </footer>
      </div>
      
    );
  }
}

export default Fib;
