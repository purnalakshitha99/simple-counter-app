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
            <Button
              variant="danger"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Decrease
            </Button>{" "}
            <div className="my-5">
              <Button
                m-2
                variant="primary"
                onClick={() => setCount(count * 2)}
                disabled={count === 0}
              >
                2 x
              </Button>{" "}
            </div>
            <div className="my-5">
              <Button
                variant="danger"
                onClick={() => setCount(count / 2)}
                disabled={count === 0}
              >
                /
              </Button>{" "}
            </div>
            <Button
              variant="secondary"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              Reset
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
