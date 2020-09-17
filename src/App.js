import React from 'react';
import './App.css';
import Movies from './components/movies';
import Table from './components/table';

function App() {
  return (
    <main className="container">
      <Movies />
      <Table />
    </main>
  );
}

export default App;
