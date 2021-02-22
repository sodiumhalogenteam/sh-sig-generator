import logo from "./logo.svg";
import "./App.css";
import SigGenerator from "./SigGenerator";

function App() {
  return (
    <div className="App">
      <h1>Build your Sodium Halogen email signature.</h1>
      <SigGenerator />
    </div>
  );
}

export default App;
