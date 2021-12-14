import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NewTask from "./components/NewTask";
import Signup from "./components/Signup";
import Tasks from "./components/Tasks";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <Navbar setUser={setUser} setToken={setToken} />
      <Routes>

        <Route 
          path='/'
          element={ <Login user={user} setUser={setUser} setToken={setToken} /> }
          />

        <Route 
          path='/signup'
          element={ <Signup user={user} setUser={setUser} setToken={setToken} /> }
          />

        <Route
          path="/mytasks"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
          user={user}
          token={token}
        />

        <Route
          path="/newtask"
          element={
            <PrivateRoute>
              <NewTask />
            </PrivateRoute>
          }
          user={user}
          token={token}
        />
        
        <Route
          path="/*"
          element={ <NotFound />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
