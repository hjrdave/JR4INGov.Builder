import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./App.scss";
import RootLayout from "./Layout";

function App() {
  return (
    <>
      <Router>
        <RootLayout>
          <Routes />
        </RootLayout>
      </Router>
    </>
  );
}

export default App;
