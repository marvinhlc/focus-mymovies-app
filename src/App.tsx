import {Provider} from 'react-redux';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Details from './pages/details';
import Favorites from './pages/favorites';
import Home from './pages/home';
import NotFound from './pages/notfound';
import Results from './pages/results';
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
              <Route path='/details' element={<Details />} />
              <Route path='/results' element={<Results />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </header>
   </div>
  );
}

export default App;
