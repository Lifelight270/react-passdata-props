import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a {props.name}!</h2>;
}

const el = <Car name="Janak" />;
function Garage() {
  return (
    <div>
      <h1>Who lives in my Home?</h1>
      {el}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
