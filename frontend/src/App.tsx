import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/layout/Navigation';
import InputBody from './components/InputBody';
import DisplayResult from './components/DisplayResult';
import { Container, Row, Col } from 'react-bootstrap';

interface IResult {
  brand: string;
  model: string;
  batch: string;
  serialnumber: string;
  expirydate: string;
  diopter: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<IResult | null>(null);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className='App'>
      <NavigationBar />
      <Container>
        <Row>
          <Col>
            <InputBody
              setResult={setResult}
              setLoading={setLoading}
              setError={setError}
            />
          </Col>
          <Col>
            <DisplayResult result={result} loading={loading} error={error} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
