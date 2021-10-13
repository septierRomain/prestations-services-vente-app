import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Component/App/Home';
import Assujetti from './Component/Assujetti';
import NonAssujetti from './Component/NonAssujetti';
import France from './Component/Assujetti/France';
import Foreign from './Component/Assujetti/Foreign';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />

          {/* Routes pour les assujetti */}
          <Route exact path='/assujetti' component={Assujetti} />
          <Route exact path='/France' component={France} />
          <Route exact path='/hors_france' component={Foreign} />

          {/* Routes pour les non assujetti */}
          <Route exact path='/non_assujetti' component={NonAssujetti} />

        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
