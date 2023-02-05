
import dbClass from './classes';
import {useNavigate } from "react-router-dom";

const Dashboard = () => {
dbClass.init();
const navigate = useNavigate();
const log_out =()=> {
    sessionStorage.clear();
    navigate("/");
}

return (
    <div className="container mt-5">
        <div className='row'>
        <p className='h1' id="user">u</p>
        </div>
        <button className='btn btn-danger' onClick={log_out}>Log Out</button>

        <div className='rows'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
        <div className='rows'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
        </div>


    </div>
)}
export default Dashboard;