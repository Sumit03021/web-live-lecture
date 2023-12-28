const express=require('express') // function
const app=express();// return something ---main application object
//this app is entire instance of your applications.

// console.log(app)
// port number is just like microporcessor of server to request call by clients.(2000-9000 mostly available.)
// by default backend use port 8080
app.listen(8080,()=>{
    console.log("server is connected at port number 8080.")
})
// everytime you make to change in your code you need to restart yur server.

//path --default('/')
// method --default(get)
// nodemon is package that helps to restart automatically when detects changes in server code etc.---npm install nodemon

// call script in package.json start: nodemon index.js
//then into gitbash first time call npm start

// middlewares---fucntion which will run on every incoming requests.---app.use(),
//middleware function
app.use((req,res)=>{
    console.log("you made a requests.")
    // console.log(req)
    res.send("hi server send the response.")
})

// gitignore---node_modules, package-lock.json write that cannot be shared on github due to that store personal info of your devices that harm you devices.

























