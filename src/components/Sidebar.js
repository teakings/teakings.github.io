import {useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate();
    const log_out =()=> {
        sessionStorage.clear();
        navigate("/");
    }
return (
<div className="border-end bg-white" id="sidebar-wrapper">
    <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
    <div className="list-group list-group-flush">
    <a className="list-group-item list-group-item-action p-3" href="#!">Dashboard</a>
    <a className="list-group-item list-group-item-action p-3" href="#!">Shortcuts</a>
    <a className="list-group-item list-group-item-action p-3" href="#!">Overview</a>
    <a className="list-group-item list-group-item-action p-3" href="#!">Events</a>
    <a className="list-group-item list-group-item-action p-3" href="#!">Profile</a>
    <a className="list-group-item list-group-item-action p-3" href="#!" onClick={log_out}>Log Out</a>
    </div>
</div>
);
}
export default Sidebar;