const express=require("express");
const morgan=require("morgan");
const  {connectDB}  = require('./database');
const postRoute=require('./routers/usersRoutr');
const app=express();
const PORT=3000;

//use middleware like morgan ,,,,
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",postRoute);
//connecting database
connectDB();

app.get('',(req,res)=>{
    let obj={"name":"naveen kuamr","age":21};
    res.send(obj);
    //res.status(200).send("data is sending");
})

//post method

// app.post('',(req,res)=>
// {
//     let body=req.body;
//     if(body!=null && body['name'] && body['id']){
//         stud.push(body);
//         res.status(200).send(body);
//     }else{
//         res.status(400).send("Invalid request body");
//     }
// });

// //put method
// app.put("/:id",(req,res)=>{
//     let id=req.body.id;
//     let body=req.body;
//     if(id!==null && body['name'] && body['id']){
//         let index=stud.findIndex(x=>x.id==id);
//         const  student=structuredClone(stud[index]);
//         student['name']=body['name'];

//         stud.splice(index,1,student);
//         res.status(202).send(student);
//     }else{
//         res.status(400).send("Invalid body");
//     }
// });

// //delete
// app.delete("/:id",(req,res)=>{
//     let id=req.params.id;
//     if(id!==null){
//         let index=stud.findIndex(x=>x.id==id);
//         const  student=structuredClone(stud[index]);
//         stud.splice(index,1);
//         res.status(200).send(`Deleted the recordby ${id}`);

//     }else{
//         res.status(500).send("invalid id");
//     }
// })

app.listen(PORT,()=>{
    console.log(`server is listening on port no ${PORT}`);
})