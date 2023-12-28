// filesystem---use for data storage but avoid due to data reductancy
// now database--- CRUD-create,read,delete,update.
// node js module/package already contain--fs--but require that fs
// module are 3rd party code .
let fs=require('fs');//objects
let data="sumit kumar"

//create --writefile()
//4 arguments  fs.writeFile(abc.txt,data,{optional},()=>{})
// old txt cannot show only new scratch data shows.
// for run code ---node note.js--result create data in abc.txt file.

fs.writeFile('abc.txt',data,{
//optional part
    encoding:'utf-8',
    flag:'w'//for write.
},(err)=>{
 if(err){throw err}
 console.log('file written successfully')
})



//library---flexible(aapne aap a/c use karo)---react,jquery
// frameworks---rigids(uske a/c use karo)---angular,bootstraps,express.

//read--readFile();
// 3 arguments---path,optional,callback functions.
fs.readFile('def.txt',{
    // encoding:'utf-8',
    // flag:'r'
},(err,data)=>{
    if(err){throw err}
    console.log(data.toString())// data gives buffer that cannot be read by ourself---that is why we use data.tostring() ya encoding tools use.
} )

// update---appendfile()
fs.appendFile('abc.txt',' thank you guys',{},(err)=>{
    if(err){throw err}
    console.log("file updated successfully")
})


//delete--unlink()
fs.unlink('def.txt',(err)=>{
    if(err){throw err}
    console.log("file deleted successfully.")
})
















