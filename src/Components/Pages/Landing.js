// import  Navigationbar from "../Layout/Navigationbar"
import RegisterForm from "../Forms/RegistrationForm";
import LoginForm from "../Forms/LoginForm";
import { useState } from "react";

const Landing =(props)=>{
   
  const [hasAccount, setHasAccount] = useState(false);
  const {setTeacher} = props

  return (
    <div>
      {/* <Navigationbar/> */}
      <h1>S. Elle Davis</h1>
      <p>Hello and Welcome to my Technical Portfolio. Please create an account to connect and view my projects! </p>

      {hasAccount === false ? (
        <div>
          <RegisterForm  setTeacher={setTeacher} />
          <p>
            Already have an account?{" "}
            <span className="btn btn-primary" onClick={() => setHasAccount(true)}>Login</span>{" "}
          </p>
        </div>
      ) : (
        <LoginForm setTeacher={setTeacher} />
      )}
    </div>
  );
}
export default Landing;