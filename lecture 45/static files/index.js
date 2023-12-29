const express=require('express')
const app=express();
const path=require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
//middleware---static files
app.use(express.static(path.join(__dirname,'public')))
//public folder--used for store static files--css,js,html,assets.

//route hit----page---styling--public (style.css)
app.get('/whatever',(req,res)=>{
    res.render('whatever')
})

app.get('/horror',(req,res)=>{
    res.render('horror')
})


//---------------get vs post---------------------
//get ---less secure ,send data visible on url in query parameter,send as a plain string ,limited to 2048 characters only,use to retreive the data.

//post----more secure,invisible on url ,different data send by different type json/string/xml etc,send data as req.body,use to make changes on server,no limited on characters to send in data.

// -------------restful architecture----------------
//preferred notes that make in copy.
//restful is just way of writing a code like ---restful request get an output send in form of data(called RESTapi) but if send in form of pages(called restful routing.)











app.listen(8080,()=>{
    console.log("server connected at port 8080")
})