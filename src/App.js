import React, {PureComponent} from "react";
import Header from "./header";
import store from "./store";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from "react-redux";
import  Home  from './pages/home';
import  Detail from './pages/detail'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home/>}></Route>
              <Route path="/detail" exact element={<Detail/>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
      
    )
  }
}

export default App;
