import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Navber from './Pages/Shared/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth';
import { Route, Routes } from 'react-router-dom';
import AllServiceTools from './Pages/AllServiceTools/AllServiceTools';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddAReview from './Pages/AddAReview/AddAReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/MyProfile/MyProfile';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase.jsx/Purchase';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/purchase/:id" element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }>

        </Route>
        <Route path="/myorders" element={
            <RequireAuth>
              <MyOrders />
            </RequireAuth>
          }>

        </Route>
        <Route path="/addAReview" element={
            <RequireAuth>
              <AddAReview />
            </RequireAuth>
          }>

        </Route>
        <Route path="/allServiceTools" element={
            <RequireAuth>
              <AllServiceTools />
            </RequireAuth>
          }>

        </Route>



        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          {/* nested routes */}
          <Route index element={<MyOrders />}></Route>
          <Route path="review" element={<AddAReview />}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>

        </Route>

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
