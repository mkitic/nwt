import React, { Component } from 'react';
import './App.css';
import person from './components/person/Person';
import Person from './components/person/Person';


class App extends Component {
  state= {
    persons: [
      {id: 'asda',  name: 'Max', age: 28},
      {id: 'vsvs', name: 'MAnu', age: 29}, 
      {id: 'mnsa', name: 'Stef', age: 20}
    ],
    otherState:'some other value',
    showPersons: false

  }

  /*switchNameHandler= (newName) =>{
   // console.log('did ut click');
   //this.state.persons[0].name= 'Melani'; --> NE OVO RADIT, NE SMI SE MINJAT OVAKO
   this.setState({persons:[
      {name: newName, age: 28},
      {name: 'MAnu', age: 29}, 
      {name: 'Stef', age: 52}
    ] })

  }
*/
  nameChangedHandler= (event, id) => {
 //da radimo sa kopijom a ne oriinalom 
    const personIndex= this.state.persons.findIndex(p=> {
      return p.id=== id;
    });

    const person= {
      ...this.state.persons[personIndex]
    };
    //ili    const person= Object.assign({}, this.state.persons[personIndex]) ;

    person.name= event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]= person;

    this.setState({persons:persons })
  }

  deletePersonHandler=(personIndex) => {
    //const persons =this.state.persons.slice();
    const persons=[...this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

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

    let persons =null;

    if (this.state.showPersons){
      persons = (
        <div>
         {this.state.persons.map((person, index) => { 
           return <Person 
            click = { ()=> this.deletePersonHandler(index)}   
            name={person.name}
            age= {person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event, person.id)}
            />

       })}
       </div>

      );
    }

  return (
    <div className="App">
     <h1> Hi Im  a react app</h1>
     <p> It works</p>
     <button
      style={style}       
      onClick={this.togglePersonsHandler}>
        Switch Name
    </button>
     
        
    {persons} 
         
    </div>
    
  );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does dis work' ));
}
}
export default App;


/*
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


*/




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