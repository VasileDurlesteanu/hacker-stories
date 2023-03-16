import * as React from "react";

const title = 'Vasile';

const welcome = {
  title: 'React',
  greeting: 'Hey'
}

// const randomArray = [
//   'React', 'Angular', 'Vue'
// ];

function getTitle(titulo) {
  return titulo;
}

function App() {
  return (
    <div>
      <h1>Hello {title} </h1>
      <h1>Hello {welcome.greeting} {welcome.title}</h1>
      <h1>Hello {getTitle('Reactivity')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
      
    </div>
  );
}

export default App;
