import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader-animation";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Pokemons from "./components/Pokemons";
import PokemonsPage from "./components/PokemonsPage";
import { Counter } from "./features/counter/Counter";
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        const name = res.data.results[0].name; // name objects
        const user = {
          name: `${name.title} ${name.first} ${name.last}`,
          email: res.data.results[0].email,
          img: res.data.results[0].picture.thumbnail,
          profile: res.data.results[0].picture.large,
          country: res.data.results[0].location.country,
        };
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!user) {
    return <Loader />;
  }
  return (
    <div>
      <NavBar userImg={user.img} />
      <Routes>
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/pokemons/:id" element={<PokemonsPage />} />
      </Routes>
    </div>
  );
}

export default App;
