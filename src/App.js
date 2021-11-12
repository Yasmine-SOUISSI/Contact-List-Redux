import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import { Button } from "semantic-ui-react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/list" component={ContactList} />

                    <Route path="/add" component={AddContact} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
