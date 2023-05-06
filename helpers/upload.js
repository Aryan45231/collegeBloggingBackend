const db=require("../db/connection.js")
const upload =async(req,res)=>{
  console.log(req.file)
    const rst= await db.Bloggers.updateOne({college_id:req.body.college_id},{
      url:req.file.filename,
      bio:req.body.bio,
  })
     res.json({
       college_id:req.body.college_id,
        bio:req.body.bio,
        profile:req.file.filename
     })
  }
  module.exports=upload