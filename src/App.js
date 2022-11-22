import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyJumbotron from "./Components/MyJumbotron";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyJumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
