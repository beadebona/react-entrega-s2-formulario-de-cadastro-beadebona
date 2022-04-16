
import './App.css';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';



function App() {
  const [member, setMember] = useState({})



  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SignUp setMember={setMember}/>
        </Route>
        <Route exact path="/home">
         <Home setMember={setMember} member={member}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
