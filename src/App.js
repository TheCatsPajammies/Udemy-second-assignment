import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  // 1. Create an input field (in root App Component)
  // it needs a change listener which outputs the length of the 
  // entered text below it (I used a paragraph tag).
  // 1.
  state = {
    content: ''
  }
  // 1.
  handleChange(event) {
    this.setState({ content:event.target.value })
  }

  

  render() {

  
  let contentArray = this.state.content.split('');

  let contentMap = [...contentArray];
  // This is the part that I needed help with!!!
  let contentRender = contentArray.map((charComp, index) => (
    <CharComponent
    character={charComp}
    key={index}
    />
  )

  )
  console.log(this.state.content.split(''));
  console.log(contentMap);
  return (
    <div className="App">
      <h1>Second Assignment</h1>
      {/* 1. */}
      <input 
       id="len-detect" 
       name="content" type="text" 
       value={this.state.content} 
       onChange={this.handleChange.bind(this)}/>
       <p>{this.state.content.length}</p>
       {/* 2. */}
       <ValidationComponent len={this.state.content.length}/>
       {contentRender}
    </div>
  );}
}

export default App;
