import { HashRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home.js' 
import Pokemons from "./components/Pokemons";
import Credits from "./components/Credits";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <div className="App">
      <HashRouter>
         
        <nav>
            <Link className="navItem" to="/">Home</Link>
            <Link className="navItem" to="/Pokemons">Pokemons</Link>
            <Link className="navItem" to="/Credits">Credits</Link>
        </nav>
         
        <Routes>

          <Route element={<ProtectedRoutes/>}>
              <Route path="/Pokemons" element={<Pokemons />} />
              <Route path="/Pokemons/:id" element={<PokemonDetail />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/Credits" element={<Credits/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
