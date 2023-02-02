const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
     res.send("Admin Home Page")
})
router.get("/dashboard",(req,res)=>{
    res.send("Admin Dashboard")
})
module.exports=router;