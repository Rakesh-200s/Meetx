import {
  createContext,
  useContext,
  useState,
} from "react";
import httpStatus from "http-status";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import server from "../environment";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: `${server}/api/v1/users`,
});

export const AuthProvider = ({ children }) => {
  const authContext=useContext(AuthContext);
  const [userData, setUserData] = useState(authContext);

  const router = useNavigate();

  
  // REGISTER

  const handleRegister = async (name, username, password) => {
    try {
      let request = await client.post("/register", {
        name:name,
        username:username,
        password:password
      });

      if (request.status === httpStatus.CREATED) {
        return request.data.message;
      }
    } catch (err) {
      throw err;
    }
  };

//LOGIN
  const handleLogin = async (username, password) => {
    try {
      let request = await client.post("/login", {
        username:username,
        password:password
      });
      console.log(username,password);
      console.log(request.data)
      if (request.status === httpStatus.OK) {
         localStorage.setItem("token", request.data.token);

        // Change this route according to your application
        router("/");
      }
    } catch (err) {
      throw err;
    }
  };
  //HISTORY of user
const getUserHistory= async()=>{
  try{
    let request = await client.get('/getUserHis',{
      params:{
        token:localStorage.getItem("token")
      }
    });
    return request.data
  }catch(err){ 
    throw err;
  }
}
  //ADD TO HISTORY
const addHistory=async(meetingCode)=>{
  try{
    let request=await client.post("/addHis",{
      token:localStorage.getItem("token"),
      meeting_code:meetingCode
    });
    return request;
  }catch(err){
    throw err;
  }
}
  const data = {
    userData,
    setUserData,
    handleRegister,
    handleLogin,
    getUserHistory,
    addHistory
    
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};
