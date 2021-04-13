import React, { useState } from 'react';
import './App.css';
import InputBody from './components/InputBody';
import DisplayResult from './components/DisplayResult';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className='App'>
      <InputBody
        setResult={setResult}
        setLoading={setLoading}
        setError={setError}
      />
      <DisplayResult result={result} loading={loading} error={error} />
    </div>
  );
};

export default App;
