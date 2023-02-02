const express = require('express');//import express
const PORT=7788; //define port
const app = express(); //create object of express
//parse port data
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//custom middleware
const xyz=(req,res,next)=>{
    req.title="Neosoft Technologies";
    next();
}
app.use(xyz)
//define routes
let mainRoutes=require('./routes/mainRoutes');
let adminRoutes=require('./routes/adminRoutes');
let userRoutes=require('./routes/userRouteuser');
app.use('/',mainRoutes);
app.use('/admin',adminRoutes);
app.use('/user',userRoutes);

app.listen(PORT, (err)=>{
    if (err) throw err;
    else console.log(`Server work on ${PORT}`)
  })
// app.get("/", (req,res)=>{
//     // res.send('<html><body><h2> Welcome to express</h2></body></html>');
//     res.sendFile(__dirname+ '/index.html');
// })
// app.post("/postdata", (req,res)=>{
//     res.send("Post request");
// })
// app.post("/prodata",(req,res)=>{
//     let id=req.body.pid;
//     let pname=req.body.pname;
//     let price=req.body.price;
//     let data={id:id,pname:pname,price:price}
//     res.status(200).json({err:0,proData:data, title:req.title})
// })
// app.put("/updatedata", (req,res)=>{
//     res.send("Put request");
// })
// app.delete("/deletedata", (req,res)=>{
//     res.send("Delete request");
// })
