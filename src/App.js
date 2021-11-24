import React from "react"; 
import './App.css';
import Carrossel from './components/carrossel/Carrossel';
import Header from './components/header';
import { Provider } from 'react-redux';
import Lightbox from './components/lightbox';
import ReactGA from 'react-ga';
import store from './components/store';
import {Component} from 'react';


ReactGA.initialize('UA-179078868-1',{debug: false});
ReactGA.pageview(window.location.pathname + window.location.search);




function App() {

  const comecar = (ev) => {
    ev.target.classList.add("sai-botao");
    const a = document.getElementById('carrossel');
    a.style = 'display: grid; opacity: 1';
    document.querySelector('header').classList.add('move_header');
    document.getElementById('container-progress-bar').style = 'display:grid'
    document.querySelector('h1').style = 'display: none';
    //const c = document.getElementById('logo').style = 'margin-top: 120%';
  }
  return (<div className="main-container">

      <div className='centered'>
        <Provider store={store}>
          <Header />
          
          <div className='content'>
            <button className='btn-votacao-init' onClick={(event) => comecar(event)}>Começar a Votação.</button>
            
            <Carrossel />
            <Lightbox />
          </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
