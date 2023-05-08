import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { setLoginFailed, setLoginSuccessful } from './redux/reducers/auth';
import Component from './Component';
function App() {

  const dispatch = useDispatch();


  const signIn = (email, password) => {
    fetch("http://localhost:3000/api/v1/login", {})
    .then((res) => {
      dispatch(
        setLoginSuccessful(res)
      )
    }).catch((err) => {    
      dispatch(
        setLoginFailed(err.message)
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Component />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
