
import './App.css';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SignUp/>
        </Route>
        <Route exact path="/home">
         <Home/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
