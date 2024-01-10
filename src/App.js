import { Route, Routes } from "react-router-dom";
import Structure from "./components/Structure";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Structure/>}>
        <Route index element={<Home/>}/>
        <Route path="cart" element={<Cart/>} />
      </Route>
    </Routes>
  );
}

export default App;
