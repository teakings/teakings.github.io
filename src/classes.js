import React from 'react';
// import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

class Database extends React.Component {


//load all
async all() {
  let data= {
    type: "all",
  };
  const response = await fetch("https://tk88.000webhostapp.com/index.php", {
    method: 'post',
    mode: "cors",
    body: JSON.stringify(data)
  });
  const dbJSON = await response.json(); //get json
  if (dbJSON==="0") {
    console.log("null");
  }
  else {
    dbJSON.forEach(field => { // separate json
    console.log(field.name);
    });
  }
}




// load list 
async transactions() {
  const response = await fetch("https://mocki.io/v1/63a57c4f-573d-49b5-b23e-0c9987b5150b");
  const histories = await response.json();
  histories.forEach(history => {
  const create = document.createElement("div");
  create.innerHTML = `
  <a href="#!" class="list-group-item border-secondary border-opacity-25 border-start-0 rounded-0 border-end-0 ">
  <div class="d-flex w-100 justify-content-between">
  <small class="mb-1 text-green">${history.type}</small>
  <small class="text-muted ">${history.date}</small>
  </div>
  <div class="d-flex w-100 justify-content-between">
  <p class="mb-1 text-white text-opacity-30">${history.ref}</p>
  <p class='text-green'>+$${history.amount}</p>
  </div>
  </a>
  `;
  
    document.querySelector("#t_lists").appendChild(create);
  
  
  });
  }

  // CREATE OTP
async createOTP() {
  const response = await fetch("https://mocki.io/v1/4e0aacd5-5241-4c88-952a-0d708b0e7ced");
  const keys = await response.json();
    for (let key of keys){
      let token_key = Math.floor(Math.random() * 199999);
      let token_num = key.value[token_key];
      console.log(token_num);
      document.getElementById("key").innerHTML = token_key;
      // emailjs.init('QL2orWif0CLMz6WRL');
      // emailjs.send("service_zyor596","template_wytcupn",{
      //   to_name: "TED",
      //   from_name: "BANK",
      //   message: token_num,
      //   });
    } 
  }

  // SUBMIT OTP
async submitOTP() {
  let id = document.getElementById("key").innerHTML;
  let otp = document.getElementById('txt-otp').value;
  const response = await fetch("https://mocki.io/v1/4e0aacd5-5241-4c88-952a-0d708b0e7ced");
  const keys = await response.json();
    for (let key of keys){
      if (key.value[id] === otp ) {
        console.log("true");
      }
      else {
        console.log("false");
      }
    } 
}
// LOGIN SESSION
async init() {
  let session_txt = sessionStorage.getItem("username");
  let data= {
    type: "view",
    uname: session_txt
  };
  const response = await fetch("https://tk88.000webhostapp.com/index.php", {
    method: 'post',
    mode: "cors",
    body: JSON.stringify(data)
  })
  const dbJSON = await response.json(); //get json
  if (dbJSON==="0") {
    console.log("null");
    return "null";
  }
  else {
    for (let field of dbJSON) {
    document.querySelector("#user").innerHTML = field.name;
    document.querySelector("#status").innerHTML = `Account ${field.status}`;
    document.querySelector("#account").innerHTML = field.account;
    document.querySelector("#account2").innerHTML = field.account;
    document.querySelector("#balance").innerHTML = field.balance;
    document.querySelector("#balance2").innerHTML = field.balance;
    console.log(field);
    }
    this.transactions();
  }
}

}
const dbClass = new Database();

export default dbClass;