import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks, setNayok] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayok(data))
  }, [])

  const [heros, setHero] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setHero(data))
  }, [])

  // const nayoks = [{name: 'Jashim', age: 54}, {name: 'Deepjol', age: 49}, {name: 'Salman', age: 45}, {name: 'Omar Sunny', age: 36}, {name: 'Alamgir', age: 68}];
  return (
    <div className="App">
    
    <MovieCounter></MovieCounter>
    {/* {
      heros.map(hk => <Hero gender = {hk.gender} name = {hk.name} key = {hk.id} age = {hk.age}></Hero>)
    } */}
    <Hero gender = {heros.gender}></Hero>
    {
      nayoks.map(nk => <Nayok name = {nk.name} key = {nk.id} age = {nk.age}></Nayok>)
    }
    {/* <Nayok name = {nayoks[0]} age='56'></Nayok>
    <Nayok name = 'Sakib Khan'></Nayok>
    <Nayok name = {nayoks[1]}></Nayok>
    <Nayok name = {nayoks[2]}></Nayok> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return(
    <div>
      <button onClick ={handleClick} >Add Movie</button>
      <h3>Number of Movies : {count}</h3>
      <MovieDisplay movies = {count}></MovieDisplay>
      <MovieDisplay movies = {count + 10}></MovieDisplay>
      <MovieDisplay movies = {count + 5}></MovieDisplay>
      <MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return(
    <h4>Movies i have acted : {props.movies}</h4>
  )
}

function Nayok(props){
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return(
    <div style = {nayokStyle}>
      <h1>Ami Nayok-{props.name}</h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>
    </div>
  )
}

function Hero(props){
  const heroStyle = {
    border: '4px solid red',
    margin: '20px'
  }
  return(
    <div style = {heroStyle}>
      <h1>Ami Hero-{props.name}</h1>
      <h3>I have done 5 movies in {props.age || 40} years</h3>
      <h4>I Am {props.gender}</h4>
    </div>
  )
}
export default App;
