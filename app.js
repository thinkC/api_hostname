// window.onload = getUsername;



function getUsername() {
   fetch("http://localhost:5001/api/hostnames/")
   .then((response)=>{
      return response.json();
   })
   .then((data)=>{
      let username = data[0]["username"];
      console.log(username);
      let url = `http://localhost:5001/api/ClientUserInventory?user=${username}`
      console.log(url);

      fetch(url)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        // console.log(data);
         let computerNames = data;
        console.log(computerNames[0]);
        let computer = computerNames[0].computer
      console.log(computer);
         let input1 = document.getElementById("hostname")
    // console.log(input1);
    input1.value = computer;
    let btnSubmit = document.getElementById("btnSubmit");
    console.log(btnSubmit);
    if (input1.value) {
        btnSubmit.onclick = function() {
            document.getElementById('host1').innerHTML = input1.value
            input1.value = ""
        }
    }
      })
      return username;
   })
   
}

getUsername();
// let btnSubmit = document.getElementById("btnSubmit");
// console.log(btnSubmit);
// console.log(input1);
// if (condition) {
    
// }

// var mmm = function(x, y) {
//     return x + y
// }

// console.log(mmm(3,2));