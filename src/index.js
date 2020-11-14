import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import About from "./Components/About";
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <NavBar />
    <Header />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
