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

  switchNameHandler= (newName) =>{
   // console.log('did ut click');
   //this.state.persons[0].name= 'Melani'; --> NE OVO RADIT, NE SMI SE MINJAT OVAKO
   this.setState({persons:[
      {name: newName, age: 28},
      {name: 'MAnu', age: 29}, 
      {name: 'Stef', age: 52}
    ] })

  }

  nameChangedHandler= (event) => {
    this.setState({persons:[
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29}, 
      {name: 'Stef', age: 52}
    ] })


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

  return (
    <div className="App">
     <h1> Hi Im  a react app</h1>
     <p> It works</p>
     <button
      style={style}       
      onClick={this.togglePersonsHandler}>
        Switch Name
    </button>
     
     {
      this.state.showPersons ?      //pokazuje da li je true or fals u boole,kao da je if f-ja, ako je tocno onda se ulazi dole za div
       <div > 
       
        <Person 
          name={this.state.persons[0].name} 
          age= {this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age= {this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximilian !')} 
          changed= {this.nameChangedHandler}>
            My hobbie: painting
        </Person>
        <Person 
          name={this.state.persons[2].name}  
          age={this.state.persons[2].age}
        />
        </div>: null             //ako je false onda ne vracaj nista
      }

     
    </div>
    
  );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does dis work' ));
}
}
export default App;


//onClick={()=> this.switchNameHandler('MAx2')}>Switch Name
/*
//import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './components/person/Person';

const app = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [personsState, setPersonState] = useState ( {
    persons: [
    {name: 'Max', age: 28},
    {name: 'MAnu', age: 29}, 
    {name: 'Stef', age: 20}
  ]
 // otherState: 'Some other value'
});

//useState({otherState: 'some other value'}); ili 
// eslint-disable-next-line react-hooks/rules-of-hooks
const [otherState, setOtherState] = useState('Some other valu');


console.log(personsState, otherState);

  const switchNameHandler= () =>{
    setPersonState({
      persons:[
        {name: 'MElani', age: 28},
        {name: 'MAnu', age: 29}, 
        {name: 'Stef', age: 33}
      ]
       //  otherState: personsState.otherState 
    });
  }
 

  return (
    <div className="App">
     <h1> Hi Im a react app</h1>
     <p> It works</p>
     <button onClick={switchNameHandler}>Switch Name </button>
    

     <Person
        name={personsState.persons[0].name}
        age= {personsState.persons[0].age}
      />             
     
     <Person 
        name={personsState.persons[1].name}
        age= {personsState.persons[1].age}> 
        My hobbie: painting
      </Person>

     <Person 
        name={personsState.persons[2].name}  
        age={personsState.persons[2].age}
    />
    </div>
    
  );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does dis work' ));
}
//}
//export default App;
export default app;


*/