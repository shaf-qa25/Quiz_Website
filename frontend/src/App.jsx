import React from "react";
import { Navigate, Route, Router, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx";
import ResultPage from "./pages/resultPage.jsx";
import PlayQuiz from "./pages/PlayQuiz.jsx";
import Footer from "./pages/footer.jsx";


function RequireAuth({children}){
  const isLoggedIn= Boolean(localStorage.getItem('authToken'));
  const location= useLocation();

  if(!isLoggedIn){
    return <Navigate to="/login" state={{from: location}} replace/>;
  }

  return children;
}
function App() {
  return (
 <>
    <Routes>
      <Route path = "/" element= {<Home/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/signup" element= {<Signup/>}/>
      <Route path="/result" element={
        <RequireAuth>
          <ResultPage/>
        </RequireAuth>
      }/>
      <Route path="/quiz" element={<PlayQuiz/>}/>

    </Routes>
    <Footer/>
   </>
  );
}

export default App;
