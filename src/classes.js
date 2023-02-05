import React from 'react';
// import Swal from 'sweetalert2';
class Database extends React.Component {

//another
async all() {
  let data= {
    type: "all",
  };
  const response = await fetch("https://teakings.000webhostapp.com/new/index.php", {
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

// LOGIN SESSION
async init() {
  let session_txt = sessionStorage.getItem("username");
  let data= {
    type: "view",
    uname: session_txt
  };
  const response = await fetch("https://teakings.000webhostapp.com/new/index.php", {
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
    dbJSON.forEach(field => { // separate json
    // console.log(field.name+" with ID: "+field.id+" logged in");
    document.querySelector("#user").innerHTML = "Welcome " + field.name;
    });
  }
}

}
const dbClass = new Database();

export default dbClass;