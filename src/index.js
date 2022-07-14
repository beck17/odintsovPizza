import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'firebase/auth'
import firebase, { initializeApp } from "firebase/app";

import store from './redux/store';

import './scss/app.scss';
import App from './App';


firebase.initializeApp({
    apiKey: "AIzaSyDw9_guMqzIKTbsMQFdvntkHVIcCMDu6jk",
    authDomain: "odintsov-pizza.firebaseapp.com",
    projectId: "odintsov-pizza",
    storageBucket: "odintsov-pizza.appspot.com",
    messagingSenderId: "552207893262",
    appId: "1:552207893262:web:0f5948bd41a313651b0d5f"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Router>
      <Context.Provider value={{
          firebase,
          auth,
          firestore
      }}>
          <Provider store={store}>
              <App />
          </Provider>
      </Context.Provider>
  </Router>,
  document.getElementById('root'),
);
