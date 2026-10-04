import React,{useContext, useState} from 'react';
import WithAuth from '../utils/WithAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore'
import { AuthContext } from '../contexts/AuthContext';
function Home(){
  let navigate = useNavigate();
     const [meetingCode, setMeetingCode] = useState("");


    const {addHistory} = useContext(AuthContext);
 let handleJoinVideoCall = async () => {
  try {
    await addHistory(meetingCode);
    navigate(`/${meetingCode}`);
  } catch (err) {
    console.error("addHistory failed:", err);
    // show user-friendly message
  }
};
  return (
   <>
   <div className='navBar'>
    <div style={{ display:"flex",alignItems:"center"}}>
      <h3>Meetx</h3>
    </div>
    <div style={{display:"flex",alignItems:"center"}}>
    <IconButton onClick={()=>{
      navigate("/history")
    }}>
      <RestoreIcon/>
    </IconButton>
      <p style={{alignItems:'center', marginTop:"9px"}}>History</p>
    <Button onClick={()=>{
      localStorage.removeItem("token")
      navigate("/auth")
    }}>
      Logout
    </Button>
    </div>
   </div>
   <div className='meetContainer'>
    <div className='leftPanel'>
      <div>
      <h3>Providing Quality Video Call </h3>
      <div style={{display:'flex', gap:'10px'}}>
       <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
        <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
      </div>
      </div>
    </div>
    <div className='rightPanel'>
    <img src='/images/logo.svg'/>
   </div>
   </div>
   
   </>
  )
}

export default WithAuth(Home);