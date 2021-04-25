import { Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      {/* when our route is '/' render out the home component
      when route says /game/id we're also gonna be on the home component */}
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
