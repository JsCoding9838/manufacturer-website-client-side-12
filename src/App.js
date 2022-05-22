import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Navber from './Pages/Shared/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageTool from './Pages/ManageTools.jsx/ManageTool';
import RequireAuth from './Pages/Login/RequireAuth';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/tools" element={<ManageTool />}></Route>
        <Route path="/products/:id" element={
            <RequireAuth>
              <ManageTool />
            </RequireAuth>
          }>

        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
