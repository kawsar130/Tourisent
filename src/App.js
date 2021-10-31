import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import AddPackage from "./Pages/AddPackage/AddPackage";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MyOrders from "./Pages/MyOrders/MyOrders/MyOrders";

import NotFound from "./Pages/NotFound/NotFound";
import PackageDetail from "./Pages/PackageDetail/PackageDetail";
import Packages from "./Pages/Packages/Packages";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/packages">
                            <Packages></Packages>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <PrivateRoute path="/myorders">
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                        <PrivateRoute path="/addpackage">
                            <AddPackage></AddPackage>
                        </PrivateRoute>
                        <PrivateRoute path="/package/:packageId">
                            <PackageDetail></PackageDetail>
                        </PrivateRoute>

                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
