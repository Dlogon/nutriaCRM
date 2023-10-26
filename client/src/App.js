import logo from './logo.svg';
import './App.css';
import React from "react";
import LoginForm from './components/LoginForm/LoginForm'

function App() {

  const [data, setData] = React.useState(null);

  // React.useEffect(()=> {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message))
  //   .catch(err => setData(err.message) )
  // })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
