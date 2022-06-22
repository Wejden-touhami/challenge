import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"



import CoachHomePage from "./pages/coachDashboard/CoachHomePage";
function App() {
    return (
      <Router>
        <Switch>
        <Route exact path="/">
            <CoachHomePage />
          </Route>
    
        </Switch>
      </Router>
    )
     
   
}

export default App
