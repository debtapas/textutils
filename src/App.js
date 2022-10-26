//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from "react";
import Alert from './components/Alert';

// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode]  = useState('light'); //Wheather dark mode is enable or not
  const [text, setText]  = useState('Enable Dark Mode'); //Wheather dark mode is enable or not
  const [alert, setAlert]  = useState(null); //Wheather dark mode is enable or not

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClass = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls)=>{
    document.body.classList.remove();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      setText('Enable Light Mode');
      document.body.style.backgroundColor = "#6c7783";
      showAlert('Dark mode is enable', 'success');
      document.title = "texTutiis - Dark Mode Enable";
      setInterval(() => {
        document.title = "texTutiis - Its amazing!";
      }, 1500);
      setInterval(() => {
        document.title = "texTutiis - Install Now!";
      }, 2000);

    }else{
      setMode('light');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode is enable', 'success');
      document.title = "texTutiis - Light Mode Enable";
    }
  }
  return (
   <>
   <Router>
      <Navbar aboutTitle="About us" title="texTutils" mode={mode} toggleMode={toggleMode} text={text}/>
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm myAlert={showAlert} heading="Enter the text which want to analyse" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
   </>
  );
}

export default App;
