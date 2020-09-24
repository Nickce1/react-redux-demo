import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import HooksIcecreamContainer from './components/HooksIcecreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import NewIceCreamContainer from './components/NewIceCreamContainer'
import HooksNewIceCreamContainer from './components/HooksNewIceCreamContainer'

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <ItemContainer />
          <ItemContainer cake />
          <CakeContainer />
          <HooksCakeContainer />
          <IcecreamContainer />
          <HooksIcecreamContainer />
          <NewCakeContainer />
          <NewIceCreamContainer />
          <HooksNewIceCreamContainer />
        </div>
      </Provider>
  );
}

export default App;
