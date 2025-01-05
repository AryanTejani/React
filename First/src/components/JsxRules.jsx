import React from 'react';

const JsxRules = () => {
  console.log("JsxRules component rendered"); // Check if this logs in the console
  return (
    <div>
        <h1 style={{ color: 'red' }}>JsxRules</h1>
        <p>Jsx must be return a single parent element.</p>
        <p>Jsx must be properly closed.</p>
        <p>Jsx attributes are written using camelCase.(eg. className instead of class.)</p>
    </div>
  );
}

export default JsxRules;
