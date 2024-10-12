import './App.css';
import Header from "./layOut/Header";
import Footer from "./layOut/Footer";
import InputReactiveComponent from "./components/inputReactiveComponent";

function App() {
  return (
    <div className="App">
      <Header></Header>
        Main Content
        <hr />
        <InputReactiveComponent />
      <Footer></Footer>
    </div>
  );
}

export default App;
