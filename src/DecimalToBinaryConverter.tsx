import React, { useState } from 'react';
import './Converter.css'; // Importar o arquivo de estilos CSS

const DecimalToBinaryConverter: React.FC = () => {
  const [decimal, setDecimal] = useState<number>(0);
  const [binary, setBinary] = useState<string>('');

  const handleDecimalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setDecimal(value);
      setBinary(value.toString(2)); // Conversão para binário
    } else {
      setDecimal(0);
      setBinary('');
    }
  };

  return (
    <div className="converter">
      <h2>Conversor Decimal para binário</h2>
      <label>Digite um número:</label>
      <input type="number" value={decimal} onChange={handleDecimalChange} />
      {binary && (
        <div className="result">
          <p>Equivalência Binária {binary}</p>
        </div>
      )}
    </div>
  );
};

export default DecimalToBinaryConverter;
