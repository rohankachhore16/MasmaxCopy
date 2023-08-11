import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./routes";
const RoutesComponet = ({ token }) => {
  if (token) {
    return <Routes isLoggedIn={true} />;
  } else {
    return <Routes isLoggedIn={false} />;
  }
};

function App() {
  return (
    <>
      <Router>
        <RoutesComponet token={true} />
      </Router>
    </>
  );
}

export default App;
