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
      <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
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
