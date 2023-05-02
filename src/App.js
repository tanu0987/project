// import logo from './logo.svg';                       
// import './App.css'; 
// import profile from "./image/pro.png";                                                     
// import email from "./image/mail.jpg";                                                     
// import pass from "./image/pass.png";                                                               

// import Login from "./components/Login"; 

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Login } from "./component/login";
// import { Profile } from "./component/Profile";
// import { Logout } from './component/logout';
// import { SignUp } from './component/SignUp/SignUp';
// import { Activate } from './component/SignUp/Activate';
// import { ForgotPass } from './component/Login/forgotPass';
// import { ResetPass } from './component/Login/resetPass';

// function App() {
// 	return <BrowserRouter>
// 		<Routes>
// 			<Route path="/" element={<FinalHome />} />
// 			<Route path="/login" element={<Login />} />
// 			<Route path="/Profile" element={<Profile />} />
// 			{/* <Route path="/signup" element={<SignUp />} /> 
// 			<Route path="/forgotpass" element={<ForgotPass />} />
// 			<Route path="/auth/activate/:uid/:token" element={<Activate />} />
// 			<Route path="/auth/password/reset/confirm/:uid/:token" element={<ResetPass />} /> */}
// 		</Routes>
// 	</BrowserRouter>;
// }

// export default App;
import Business from './components/profile';
import Form from './components/Form';
import About from './components/about';
import Counter  from './components/counter';
import Card from './components/main';

function App() {                                            
  return (        
    <div className="App">
      {/* <Login /> */}
      {/* <Business /> */}
      {/* <Form /> */}
      <About />
      <Counter />
      <Card />
      
    </div>
  ); 
}

export default App;              