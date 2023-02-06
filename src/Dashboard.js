import dbClass from './classes';
import {useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faClipboardList, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import profile from './img/profile.svg';

const Dashboard = () => {
dbClass.init();
const navigate = useNavigate();
const log_out =()=> {
    sessionStorage.clear();
    navigate("/");
}
const toogle_sidebar =()=>{
    document.body.classList.toggle('sb-sidenav-toggled');
}
return (
    < >
    {/* NAVBAR AND SIDEBAR */}
    <div className="d-flex" id="wrapper">
    {/* Sidebar */}
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
    {/* Page content wrapper */}
    <div id="page-content-wrapper">
    {/* Top navigation */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div className="container-fluid">
    <a className="nav-link me-2" href="#!" role="button" onClick={toogle_sidebar}>
    <img className="img-profile rounded-circle"
    src={profile} alt="profile" />
    <span id="user" class="ms-2 d-inline text-secondary fw-bold"></span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
    <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
    <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#!">Action</a>
        <a className="dropdown-item" href="#!">Another action</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#!">Something else here</a>
    </div>
    </li>
    </ul>
    </div>
    </div>
    </nav>

    {/* Page content */}
    <div className="container-fluid">

    <div className='row mt-4'>

        <div className="col-lg-3 col-md-6 mb-4">
        <div className="card border-left-success me-0 ms-0 pt-2">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <div className="fw-bold text-success h6 text-uppercase mb-1">
        <span id='status'></span></div>
        <div className="mb-0 text-secondary fw-bold"><span id='account'></span></div>
        </div>
        <div className='col-auto'>
        <FontAwesomeIcon icon={faCalendar} size="2x" className='text-secondary'/>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
        <div className="card border-left-primary me-0 ms-0 pt-2">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <div className="fw-bold text-primary h6 text-uppercase mb-1">
        Account balance</div>
        <div className="mb-0 text-secondary fw-bold"><span>$<span id='balance'></span></span></div>
        </div>
        <div className='col-auto'>
        <FontAwesomeIcon icon={faDollarSign} size="2x" className='text-secondary'/>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
        <div className="card border-left-warning me-0 ms-0 pt-2">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <div className="fw-bold text-warning h6 text-uppercase mb-1">
        Earnings</div>
        <div className="mb-0 text-secondary fw-bold">$40,000</div>
        </div>
        <div className='col-auto'>
        <FontAwesomeIcon icon={faComments} size="2x" className='text-secondary'/>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
        <div className="card border-left-info me-0 ms-0 pt-2">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <div className="fw-bold text-info h6 text-uppercase mb-1">
        Earnings</div>
        <div className="mb-0 text-secondary fw-bold">$40,000</div>
        </div>
        <div className='col-auto'>
        <FontAwesomeIcon icon={faClipboardList} size="2x" className='text-secondary'/>
        </div>
        </div>
        </div>
        </div>
        </div>


    </div> 
    {/* CARD ROW ENDS*/}
    
    <div className='row bg-white shadow p-2 m-2'>
        <table class="table table-striped table-light">
        <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        </tr>
        </tbody>
        </table>
    </div>


    </div>


    </div>
    </div>

    </>
)}
export default Dashboard;