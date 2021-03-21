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

  deleteCharHandler = ( index ) => {
    const newContent = this.state.content.split('');
    newContent.splice(index, 1);
    const updatedContent = newContent.join('');
    this.setState({content: updatedContent});
  }
  

  render() {

  
  let contentArray = this.state.content.split('');

  
  // 5. Render a list of CharComponents where each Charcomponent receives a different letter of 
  // the entered text.
  // This is the part that I needed help with - I was able to render the list of components
  // but I just needed the last push to get the index letter in the component.
  let contentRender = contentArray.map((charComp, index) => (
    <CharComponent
    character={charComp}
    key={index}
    clicked={() => this.deleteCharHandler(index)}
    />
  )

  )
  
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
