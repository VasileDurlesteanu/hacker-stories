import * as React from "react";

const title = 'Vasile';

const welcome = {
  title: 'React',
  greeting: 'Hey'
}

// const randomArray = [
//   'React', 'Angular', 'Vue'
// ];

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function getTitle(titulo) {
  return titulo;
}

function App() {
  return (
    <div>
      <h1>Hello  </h1>
      <h1>Hello {welcome.greeting} {welcome.title}</h1>
      <h1>Hello {getTitle('Reactivity')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
      
    </div>
  );
}

export default App;
