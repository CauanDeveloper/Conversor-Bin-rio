import React from 'react';
import DecimalToBinaryConverter from './DecimalToBinaryConverter'; // Importe o componente criado

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversor Decimal para binário</h1>
      </header>
      <main>
        <DecimalToBinaryConverter />
      </main>
    </div>
  );
};

export default App;
