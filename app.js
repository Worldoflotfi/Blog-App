const express=require('express')
const app=express()
const port = 3000
const postRoute = require('./routes/postRoutes')

const mid=(req,res,next)=>{
  let method=req.method
  let link =req.url
  console.log(`Your methode is ${method} and your url is ${link}`)
    next();
}
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.use(mid)

app.use(express.json());

app.use('/',postRoute)
//authenfication 

app.listen(port,()=>{
    console.log(`app is listening on Port ${port}`)
})







