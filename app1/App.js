const express=require('express');//import express 
const PORT=7788;//define port 
const app=express();//create object of express 

//parse post data 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//custom middleware 
  const xyz=(req,res,next)=>{
     req.title="NeoSoft Technologies";
     next();
  }
  app.use(xyz)
app.use(express.static('images'));
app.use("/assets",express.static('images'));
//define routes 
let mainRoutes=require('./routes/mainRoutes');
let adminRoutes=require('./routes/adminRoutes');
let userRoutes=require('./routes/userRoutes');
app.use('/',mainRoutes);
app.use('/admin',adminRoutes);
app.use('/user',userRoutes);
app.use((req,res,next)=>{
   res.status(404).send('<html> <body> <h2> Page not found </h2></body></html>')
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`)
})