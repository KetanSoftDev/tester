import './App.css';
import React from 'react';
import BookList from './BookList';

function App() {
  return (
    <>
      {/* <Person/>
      <Message /> */}
      <BookList/>
    </>
  );
}

//implicit return when only one line needs to be returned
const Person = () => <h3>John Doe</h3>

//explicit return
const Message = () => {
  return <p>this is my message</p>
}

export default App;
