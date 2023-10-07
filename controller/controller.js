const Student = require("../model/schema")
module.exports={
  addStud:async(req,res)=>{
    const {Name,Standard,Division,Rollno,Age,Phoneno}=req.body;
    try{
        const result=await Student.create({
            Name,
            Standard, 
            Division,
            Rollno,
            Age,
            Phoneno,
        });
        res.status(200).json("success");
    }
        catch(err){
        res.status(400).json({err});
  }
 },
getStudbyid:async(req,res)=>{
  const id=req.params.id
  try {
       const result3=await Student.findById(id)
       res.status(200).json({result});
  }
  catch(err) {
      res.status(400).json({err});
      }
},
getStud:async(req,res)=>{
  const id=req.params.id
  try {
       const result2=await Student.find()
       res.status(200).json({result2});
  }
  catch(err) {
      res.status(400).json({err});
      }

  
},
updateStudbyid:async(req,res)=>{
  const id=req.params.id
  try{
    await Student.findByIdAndUpdate(id,{
      Name:req.body.Name,
      Standard:req.body.Standard,
      Division:req.body.Division,
      Rollno:req.body.Rollno,
      Age:req.body.Age,
      Phoneno:req.body.Phoneno
    });
    res.status(200).json("success");
  }
  catch(err){
    res.status(400).json({err});
}
},
deleteStud:async(req,res)=>{
  const id=req.params.id
  try{
    await Student.findByIdAndDelete(id)
    res.status(200).json("success");
  }
  catch(err){
    res.status(400).json({err});
  }
}
}