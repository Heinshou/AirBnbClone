const verbMiddleware = (req,res,next) => {
    console.log('Request type:', req.method)
    
    if(req.method === 'POST'){
        res.status(200).json({message:"hiciste un post"})
    }else{
        next()
    }
}


module.exports = {
    verbMiddleware
}