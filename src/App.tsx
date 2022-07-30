import {Provider} from 'react-redux';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Favorites from './pages/favorites';
import Home from './pages/home';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <header>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </header>
   </div>
  );
}

export default App;
