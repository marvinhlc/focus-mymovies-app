import {Provider} from 'react-redux';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { store } from './store/store';

function App() {
  return (
   <Provider store={store}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
   </Provider>
  );
}

export default App;
