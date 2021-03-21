import "./App.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
