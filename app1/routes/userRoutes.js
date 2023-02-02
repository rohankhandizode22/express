const express= require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("User  Home Page")
})
router.get("/dashboard",(req,res)=>{
    res.send("User Dashboard")
})
module.exports=router;