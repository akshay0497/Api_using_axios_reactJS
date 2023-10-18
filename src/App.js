import logo from "./logo.svg";
import "./App.css";
import AxiosTutorial from "./AxiosPractice/Tutorial/AxiosTutorial_get";
import FormAxiosPost from "./AxiosPractice/Tutorial/FormAxiosPost";
import GetAllProducts from "./AxiosPractice/DummyApiPractice/GetAllProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsDetails from "./AxiosPractice/DummyApiPractice/ProductsDetails";
import SearchProducts from "./AxiosPractice/DummyApiPractice/SearchProducts";
import LimitProducts from "./AxiosPractice/DummyApiPractice/SearchProducts";
import UsersAPI from "./AxiosPractice/DummyApiPractice/UsersAPI";
import UsersDetailsAPI from "./AxiosPractice/DummyApiPractice/UsersDetailsAPI";
import UserSearch from "./AxiosPractice/DummyApiPractice/UserSearch";
import Home from "./AxiosPractice/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/products" element={<GetAllProducts/>}/>
          <Route path="/products/:id" element={<ProductsDetails/>}/>
          <Route path="/products/limit/:limit" element={<LimitProducts/>}/>
          <Route path="/users" element={<UsersAPI/>}/>
          <Route path="/usersdetails/:id" element={<UsersDetailsAPI/>}/>
          <Route path="/users/:search" element={<UserSearch/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
