import './App.css';
import {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Components/Pages/Landing';
import Contacts from './Components/Pages/Contacts';
import Portfolio from './Components/Pages/Portfolio';
import UpdateAssignment from "./Components/Forms/UpdateAssignment"

const App = () => {
  
    const [teacher, setTeacher] = useState(null)

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={routerProps => <Landing {...routerProps} setTeacher={setTeacher}/> }/>
          <Route path='/portfolio' render={routerProps => <Portfolio {...routerProps} teacher={teacher} /> }/>
          <Route path='/contacts' render={routerProps => <Contacts {...routerProps} /> }/>
          <Route path='/update/:id' component={UpdateAssignment}/>
        </Switch>      
        
         
      </div>
    );
}

export default App;
