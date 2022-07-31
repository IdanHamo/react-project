import "./App.css";
import Footer from "./components/global/footer";
import Home from "./components/global/home";
import Nav from "./components/global/nav";
import { Routes, Route } from "react-router-dom";
import About from "./components/global/about";
import Contact from "./components/global/contact";
import Recipes from "./components/global/recipes";
import Register from "./components/authentication/register";
import Login from "./components/authentication/login";
import PremiumRegistration from "./components/authentication/registerPremium";
import Logout from "./components/authentication/logout";
import MyRecipes from "./components/premium/myRecipes";
import CreateRecipe from "./components/crud/createRecipe";
import DeleteRecipe from "./components/crud/deleteCard";
import FullRecipe from "./components/crud/fullRecipe";
import EditRecipe from "./components/crud/editRecipe";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protectedRouth";
import ProtectedRouteOnline from "./components/common/protectedRouthOnline";

function App() {
  console.log("sfsf");
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ToastContainer></ToastContainer>
      <header>
        <Nav />
      </header>
      <div className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/recipes" element={<Recipes></Recipes>}></Route>
          <Route
            path="/register"
            element={
              <ProtectedRouteOnline>
                <Register></Register>
              </ProtectedRouteOnline>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <ProtectedRouteOnline>
                <Login></Login>
              </ProtectedRouteOnline>
            }
          ></Route>
          <Route
            path="/logout"
            element={<Logout redirect="/login"></Logout>}
          ></Route>
          <Route
            path="/premium"
            element={
              <ProtectedRouteOnline>
                <PremiumRegistration></PremiumRegistration>
              </ProtectedRouteOnline>
            }
          ></Route>
          <Route
            path="/myRecipes"
            element={
              <ProtectedRoute prem>
                <MyRecipes></MyRecipes>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/createRecipe"
            element={
              <ProtectedRoute prem>
                <CreateRecipe></CreateRecipe>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/cards/delete/:id"
            element={
              <ProtectedRoute prem>
                <DeleteRecipe></DeleteRecipe>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/cards/fullRecipe/:id"
            element={
              <ProtectedRoute prem>
                <FullRecipe></FullRecipe>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/cards/editRecipe/:id"
            element={
              <ProtectedRoute prem>
                <EditRecipe></EditRecipe>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
