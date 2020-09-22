import React from 'react';
import Daters from './components/Hello'


function App() {

  const getDaters = async () => {
    try {
      const response = await fetch('http://localhost:3000/users')
      const daters = response.json()
      console.log(daters)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Daters />
    </div>
  );
}

export default App;
