import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyJumbotron from "./Components/MyJumbotron";
import LastRelease from "./Components/LastRelease";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyJumbotron />
      <LastRelease className="mt-3" />
      <MyFooter className="mt-5" />
    </div>
  );
}

export default App;
