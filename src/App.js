import React, { Component } from 'react';
import Customer  from './components/Customer';
import './App.css';

const customers = [
  {
  'id':1,
  'image': 'http://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '990629',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':2,
  'image': 'http://placeimg.com/64/64/3',
  'name' : '나라요',
  'birthday' : '990920',
  'gender' : '남자',
  'job' : '공무원'
},
{
  'id':3,
  'image': 'http://placeimg.com/64/64/4',
  'name' : '오다리',
  'birthday' : '950920',
  'gender' : '여자',
  'job' : '직장인'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c =>{ return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
     </div>
    );
   }
}
        

export default App;
