const express = require("express");
const app = express();
const { hostnames } = require("./data");
const cors = require("cors");

//for cross origin
app.use(
    cors({
        origin: "*",
        // origin: "http://localhost:5000/api/products",
    })
)

// get hostnames
app.get("/api/hostnames", (req, res)=>{
    const newHostNames = hostnames.map((hostname)=>{
        const {id, username } = hostname;
        return {id, username};
    });
    res.json(newHostNames);
});


//get one hostname
app.get("/api/hostnames/:hostID", (req, res)=>{
    // console.log(req);
    // console.log(req.params);
    const { hostID } = req.params;
    const singleHost = hostnames.find((hostname)=> hostname.id === Number(hostID));
    if(!singleHost){
        res.status(404).send("Hostname does not exist");
    }
    
    return res.json(singleHost);
});

//query string
app.get("/api/ClientUserInventory", (req, res)=>{
    console.log(req.query);
    const { user } = req.query;
    // res.send("Hello World")
    let findUsers = [...hostnames]; 
    if(user){ //if user is in the query string
        console.log("user: " + user);
        findUsers = findUsers.filter((userProfile)=>{
            console.log("anotherUser " + userProfile);
            return userProfile.user.endsWith(user)
            
        })


        

    }
    res.status(200).json(findUsers)
    // res.status(200).json(hostnames[i])
})

function makeitwork(params) {
    
}

function getIndex(str) {
   console.log(str.indexOf("\\"));
   return str.indexOf("\\")
}

function getStrLength(str) {
    console.log("str.length: " + str.length);
    return str.length
}

app.listen(5001, ()=>{
    console.log("hostame server running on port 5001");
})