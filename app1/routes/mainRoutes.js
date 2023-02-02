const express=require('express');
const router=express.Router();
const jsonCheck=require('../middleware/jsonmid')
router.get("/",(req,res)=>{
    //res.send('<html> <body> <h2> Welcome to express </h2> </body> </html>');
    res.sendFile('index.html',{root:'./'});
})
//params
router.get("/products/:cat",(req,res)=>{
    let cname=req.params.cat;
    res.send(`The category is ${cname}`)
})
//optional params(?)
router.get("/myproducts/:cat/:scat?",(req,res)=>{
    let cname=req.params.cat;
    let scat=req.params.scat;
    if(scat){
        res.send(`The category is ${cname} and sub category is ${scat}`)
    }
    else {
    res.send(`The category is ${cname}`)
    }
})
router.post("/postdata",(req,res)=>{
   //read form data 
   let fname=req.body.fname;
   let lname=req.body.lname;
    res.send(`${fname} ${lname} submitted data !`);
})
router.post("/prodata",jsonCheck(),(req,res)=>{
    let id=req.body.pid;
    let pname=req.body.pname;
    let price=req.body.price;
    let data={id:id,pname:pname,price:price}
    res.status(200).json({err:0,proData:data,title: req.title})
})
router.put("/updatedata",(req,res)=>{
   res.send("Put request"+ req.title);
})
router.delete("/deletedata",(req,res)=>{
   res.send("Delete request"+ req.title);
})
module.exports=router;