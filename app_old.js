// console.log("okay");

console.dir(document.body.children[1][0])
console.log(document.getElementById('hostname'))

function submitHostName() {
    console.log("submitted");
}

// async function getApi(url) {
//     let myObjet = await fetch(url)
// }

// fetch("http://localhost:5000/api/products")
// .then((response)=> response.json())
// .then((data)=>console.log(data));


window.onload = callApis;

// function getHostNames() {
//     fetch("http://localhost:5000/api/hostnames")
//      .then((response)=> response.json())
//      .then((data)=> data);

//      submitHostName(data)
// }

function callApis() {
   // getUsername();

   getHostNames();
}

// function getUsername() {
//    fetch("http://localhost:5001/api/hostnames/")
//    .then((response)=>{
//       return response.json();
//    })
//    .then((data)=>{
//       let username = data[0]["username"];
//       console.log(username);
//       return username;
//    })
// }

function getHostNames() {
   //  fetch("http://localhost:5001/api/hostnames")

// function getUsername() {
//    fetch("http://localhost:5001/api/hostnames/")
//    .then((response)=>{
//       return response.json();
//    })
//    .then((data)=>{
//       let username = data[0]["username"];
//       console.log(username);
//       return username;
//    })
// }

// getUsername();
   let url = "http://localhost:5001/api/ClientUserInventory?user=oyewob"
   console.log(url);



    fetch(url)
     .then((response)=>{
        return response.json();
     })
     .then((data)=>{
        let computerNames = data;
        console.log(computerNames[0]);
        let computer = computerNames[0].computer
      console.log(computer);

       let input1 = document.getElementById("hostname")
    console.log(input1);
    input1.value = computer;

   
      return computer;
        // submitHostName(computerNames)
     })
     
   //   console.log(computer);
   
}


//test this 
// //make getHostNames a variable that returns the computer
// if (variable getHostmname == true) {
   
//    let btnAddHostname = document.getElementById("btnSubmit");
//    let hostItem = document.getElementById("host1");
//    //  onclick.btnAddHostname = function() {
//    //    hostItem.innerHTML = computer;
//    //  }
// }


 



// function addHostNames() {
//    let hostItem = document.getElementById("host1");
   
// }


// function test() {
//    // let str = "europe\\oyewob";
//    let str = "americas\\jordanm";
//    // let str = "europe\\mikel";
//    // let result = str.substring(0, getIndex(str)+1);
//    // let result = str.substring(str.length, getIndex(str));
//    let result = str.substring(getIndex(str)+1, str.length);
//    console.log("str.length: " + str.length);
//    // let result = str.substring(6, 12);
//    console.log(result);
// }
// test();

// function getIndex(str) {
//    console.log(str.indexOf("\\"));
//    return str.indexOf("\\")
// }

// console.log(getIndex("europe\oyewob"))

