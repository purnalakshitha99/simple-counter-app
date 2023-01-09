import React, { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <Button variant="success" onClick={() => setCount(count + 1)}>
              Increase
            </Button>{" "}
            <Button variant="danger" onClick={() => setCount(count - 1)}>
              Decrease
            </Button>{" "}
            <Button variant="secondary" onClick={() => setCount(0)}>
              Reset
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
