import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import HooksIcecreamContainer from './components/HooksIcecreamContainer'
import store from './redux/store'

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <CakeContainer />
          <HooksCakeContainer />
          <IcecreamContainer />
          <HooksIcecreamContainer />
        </div>
      </Provider>
  );
}

export default App;
