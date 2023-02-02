const jsonCheck=function(){
    return (req,res,next)=>{
        if(req.headers['type']==='application/json'){
            next()
        }
        else{
            res.status(201).send('Only Application/json format supportes')
        }
    }
}
module.exports=jsonCheck;