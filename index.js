let express= require("express");
const fs =require("fs");
const app= express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the Home Page</h1>")
})

app.get("/gencount",(req,res)=>{
   const jsondata=fs.readFileSync("data.json",'utf-8');
   const data=JSON.parse(jsondata);
   let m=0;
   let f=0;
   let count=Object.keys(data).length
   console.log(typeof(data));

   for(let i=0;i<count;i++){
    if(data[i].gender=="Male"){
        m++
    }else {
        f++;
    }
   }
   console.log(f,m);
   res.send(`The initial Male count is ${m} and Female count is ${f} at ${Date()}\n1`);
})
app.listen(5000,()=>{
    console.log("5000");
})