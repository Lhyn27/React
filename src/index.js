import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = ({text}) => {
  return
  <button>Hola Mundo</button>
}

root.render(
  <React.Fragment>
  <Button text={'Button 1'}></Button>
  </React.Fragment>
);
