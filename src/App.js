import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Products from "./Components/Products/Products";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="notfound" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
