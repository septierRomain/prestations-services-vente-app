import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Component/App/Home';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />

          {/* Routes pour les assujetti */}

          {/* Routes pour les non assujetti */}

        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
