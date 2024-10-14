const mongoose=require ('mongoose');
const courseSchema=new mongoose.Schema({
    courseImage:String,
    courseId:String,
    courseName:String,
    courseCategory:String,
    courseDescription:String,
    courseFee:Number
})
const  CourseData=mongoose.model('courses',courseSchema);
module.exports=CourseData;