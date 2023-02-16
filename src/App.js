import logo from './logo.svg';
import './App.css';
import Header from './Componenet/Header';
import CardsDetails from './Componenet/CardsDetails';
import Cards from './Componenet/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Fav from './Componenet/Fav';
import Cheakout from './Componenet/Cheakout';

function App() {
  return (
<>

<Header/>
<Routes>

<Route path="/"  element={<Cards/>} />
<Route path="/cart/:id"  element={<CardsDetails/>} />
<Route path="/fav"  element={<Fav/>} />
<Route path="/cheakout"  element={<Cheakout/>} />

</Routes>
</>
  );
}

export default App;
