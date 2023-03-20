import dbClass from './classes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faClipboardList, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';


const Dashboard = () => {

    useEffect(() => {
        dbClass.init();
        dbClass.createOTP();
        let count = 120;
        function countdown(){
            document.querySelector('#count_txt').innerHTML = count;
            count--;
            if(count>=0){
                setTimeout(countdown,1000);
            }
            else {
                dbClass.createOTP();
            }
        }
        countdown();
      })
    
 
const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];
return (
    < >
    <div className="d-flex" id="wrapper">

    {/* Sidebar */}
    <Sidebar />

    {/* Page content wrapper */}
    <div id="page-content-wrapper">
    {/* Navbar */}
    <Navbar />

    {/* Page content */}
    <div className="container m-4 mx-auto">

        {/* ACTIVITY CARD */}
    <div className='row'>

    <div className="col-lg-6 col-md-6 mb-4">
        <div className="card card-height border-left-success me-0 ms-0 pt-2 shadow rounded-4">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <small className='text-secondary'>Account</small>
        <div className="fw-bold h6 text-success mb-1 mt-3">
        <span>Savings Account</span></div>
        
        <div className="mb-5 text-secondary fw-bold"><span id='account'></span></div>
        <button className='btn btn-success mb-2'onClick={dbClass.verify}>Transfer Money</button>
        </div>
        <div className='col-auto'>
        <small className='text-secondary'>Available Funds</small>
        <h5 className='mt-3 h5'>$<span id='balance'></span></h5>
        </div>
        </div>
        </div>
        </div>
    </div>
    
    <div className="col-lg-6 col-md-6 mb-4">
        <div className="card me-0 ms-0 pt-2 bg-dark shadow rounded-4">
        
        <div className="card-body scroll">
        <div class="h5 text-white">Transaction History</div>
        <div className="row no-gutters">
        <ul id='t_lists' className="list-group">
       
        </ul>
        
        </div>
        <button className='btn btn-success mt-3 float-end'>More</button>
        </div>
        </div>
    </div>
    
    </div>
{/* ACTIVITY CARD ENDS */}

    <div className='row mt-4'>

        <div className="col-lg-3 col-md-6 mb-4">
        <div className="card card2 me-0 ms-0 pt-2">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <div className="fw-bold text-secondary h6 text-uppercase mb-1">
        <span id='status'></span></div>
        <div className="mb-0 text-secondary fw-bold"><span id='account2'></span></div>
        </div>
        <div className='col-auto'>
        <FontAwesomeIcon icon={faCalendar} size="2x" className='text-success'/>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
        <div className="card card2 me-0 ms-0 pt-2">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <div className="fw-bold text-secondary h6 text-uppercase mb-1">
        Account balance</div>
        <div className="mb-0 text-secondary fw-bold"><span>$<span id='balance2'></span></span></div>
        </div>
        <div className='col-auto'>
        <FontAwesomeIcon icon={faDollarSign} size="2x" className='text-primary'/>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
        <div className="card card2 me-0 ms-0 pt-2">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <div className="fw-bold text-secondary h6 text-uppercase mb-1">
        Earnings</div>
        <div className="mb-0 text-secondary fw-bold">$40,000</div>
        </div>
        <div className='col-auto'>
        <FontAwesomeIcon icon={faComments} size="2x" className='text-warning'/>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
        <div className="card card2 me-0 ms-0 pt-2">
        <div className="card-body">
        <div className="row no-gutters">
        <div className="col me-2">
        <div className="fw-bold text-secondary h6 text-uppercase mb-1">
        Earnings</div>
        <div className="mb-0 text-secondary fw-bold">$40,000</div>
        </div>
        <div className='col-auto'>
        <FontAwesomeIcon icon={faClipboardList} size="2x" className='text-info'/>
        </div>
        </div>
        </div>
        </div>
        </div>


    </div> 
    {/* CARD ROW ENDS*/}
    
    <div className='shadow p-2 mb-4'>
        
    </div>

    {/* ACTIVITY CARD */}
    <div className='row'>

    <div className="col-lg-6 col-md-6 mb-4">
        <div className="card m-0 pt-2 shadow">
        <div className="card-body">
        <div className="row no-gutters">

      <VictoryChart theme={VictoryTheme.material} domainPadding={20} >
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]} />
        <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
        <VictoryBar style={{ data: { fill: "#4F7942" } }} data={data} x="quarter" y="earnings" />
      </VictoryChart>

        </div>
        </div>
        </div>
    </div>
    
    <div className="col-lg-6 col-md-6 mb-4">
        <div className="card me-0 ms-0 pt-2 shadow">
        <div className="card-body">
        <div className="row no-gutters">

        <h1>List Users</h1>
            
        <input type="text" id="txt-otp" />
        <div className="form-text">OTP will expire in <span id="count_txt">0</span> seconds</div>
        <button className='btn btn-primary mt-4' onClick={dbClass.submitOTP}>submit otp</button>
        </div>
        </div>
        </div>
    </div>

    </div>
    {/* ACTIVITY CARD ENDS */}




    
            
    </div>

    </div>
    </div>

    </>
)}
export default Dashboard;