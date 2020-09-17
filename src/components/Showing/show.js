import React, { Component } from 'react';
import './App.css';
import Person from './components/person/Person';


class App extends Component {
  state= {
    persons: [
      {name: 'Max', age: 28},
      {name: 'MAnu', age: 29}, 
      {name: 'Stef', age: 20}
    ],
    otherState:'some other value',
    showPersons: false

  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });        //Ako ej true onda je showPersons fals  i obrnuto
  }


  render(){
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };


    let description =null;
    if (this.state.showPersons){

      description= (
        <div > 
       
        <Person 
          name={this.state.persons[0].name} 
          age= {this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age= {this.state.persons[1].age}
        >
            My hobbie: painting
        </Person>
        <Person 
          name={this.state.persons[2].name}  
          age={this.state.persons[2].age}
        />
       </div>

      );

    }


  return (
    <div className="App">
     <h1> Mesumi </h1>
     <p> Hello and welcome to our site </p>
     <button
      style={style}       
      onClick={this.togglePersonsHandler}>
        Show description
    </button>
     
     {description}
    
    </div>
    
  );
   
}
}
export default App;
