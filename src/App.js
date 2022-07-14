import React from 'react';

import { Header } from './components';
// import { Home, Cart, Login, Register} from './pages';
// import { Route } from 'react-router-dom';
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/*<Route path="/" component={Home} exact />*/}
        {/*<Route path="/cart" component={Cart} exact />*/}
        {/*<Route path="/login" component={Login} exact />*/}
        {/*<Route path="/register" component={Register} exact />*/}
         <AppRouter />
      </div>
    </div>
  );
}

export default App;
