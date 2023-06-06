import { Link } from 'react-router-dom';

import Header from "./components/Header"

function App() {
  return ( 
    <div className="wrapper clear">
      <Header />
      <div className="bottom d-flex justify-between">
      <p>From the Russian Federation</p>
      <p className="cu-p">
        <Link to="/policy">
          <u>Privacy Policy</u>
        </Link>
      </p>
      </div>
    </div>
  );
}

export default App;
