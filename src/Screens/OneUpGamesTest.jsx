import React, {useState,useEffect} from "react";
import Navbar from "../Components/Navbar";


export default function OneUpGamesTest(){

    const [userInput,setUserInput] = useState("");
    const [timer,setTimer] = useState(10);
    const [users,setUsers] = useState([])


    const handleAddUser = () => {
        if(userInput !== ""){
            setUsers([...users,{username:userInput,time:timer}]);
            
        }
    }





    

    return(
        <>
        <Navbar />
        <div className="w-100 d-flex justify-content-center align-items-center p-5 flex-column">
            <h3 className="mb-5">One Up Games VR List</h3>
            <span className="d-flex justify-content-center">
            <input className="form-control" type="text" placeholder="First Name..." value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            <button className="btn btn-success mx-3" onClick={() => handleAddUser()}>Add</button>
            </span>
            <div className="d-flex flex-column justify-content-between align-items-center w-50 my-5">
            {users.map((user) => (
                <>
                <span className="d-flex justify-content-between align-items-center w-25 py-2 px-3" style={{background:"#aaa"}}>
                <p className="p-0 m-0">{user}</p>
                <p className="p-0 m-0"><strong>{timer}</strong></p>
                </span>
                </>
            ))}
            </div>
        </div>
        </>
    )
}