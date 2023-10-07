const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const StudentSchema = new Schema(
    {
      Name: {
        type: String,
        required: true,
      },
      Standard: {
          type: String,
          required: true,
        },
       Division : {
          type: String,
          required: true,
        },
       Rollno : {
          type: Number,
          required: true,
        },
        Age : {
            type: Number,
            required: true,
          },
        Phoneno : {
            type: Number,
            required: true,
          }, 
      }
      
  );
  module.exports=mongoose.model("Student",StudentSchema);