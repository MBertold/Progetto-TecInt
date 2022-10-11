import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pagine/Home';
import LoginPage from './pagine/LoginPage';
import Ristoranti from './pagine/creaLocale';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavbarMenu from './componenti/NavbarMenu';
import LocaleNavbar from './componenti/LocaleNavbar';
import Locale from './pagine/Locale';
import ElencoRistoranti from './pagine/ElencoRistoranti';
import UserLocale from './pagine/UserLocale';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarMenu />}>
          <Route index element={<Home />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/ristoranti' element={<ElencoRistoranti/>}/>
          <Route path='/ristoranti/locale'element={<UserLocale/>}/>
            
        </Route>
        <Route exact path='/unisciti' element={<Ristoranti />} />
        <Route exact path='/ristorante' element={<LocaleNavbar/>}>
          <Route index element={<Locale/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
