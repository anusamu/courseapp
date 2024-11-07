const express=require ('express');
const router=express.Router();
const jwt = require('jsonwebtoken'); 

router.use(express.json())
router.use(express.urlencoded({extended:true}));
const courseModel=require('../models/courseData')

// adding middleware function for token recheck


function verifyToken(req,res,next){
    let token=req.headers.token;
    try{
        if(!token) throw 'Unauthorised Access'
        let payload=jwt.verify(token,"secret")
        if(!payload)throw 'Unauthorised Access'
        next()
    }catch(error){
        res.json({message:error})
    }
}




// crud operation
router.get('/', verifyToken,async(req,res)=>{
    try {
        const courses=await courseModel.find()
        res.status(200).send(courses);
    } catch (error) {
        res.status(404).send('Course not found');
        
    }
});


router.post('/addCourse',verifyToken, async(req,res)=>{
    try {
        const course=req.body;
        const newCourse=new courseModel(course);
        const savedCourse=await newCourse.save();
        res.status(200).send('Course added successfully');
    } catch (error) {
        console.error(error); // Log the actual error
        res.status(404).send('Error adding course');
    }
});
router.put('/edit/:id',verifyToken,async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedCourse=await courseModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send('Course updated successfully');
    } catch (error) {
        res.status(404).send('Error updating course');
    }
});
router.delete('/delete/:id',verifyToken,async(req,res)=>{
    try {
        const id=req.params.id;
        const deleteCourse=await courseModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send('Course deleted successfully');
    } catch (error) {
        res.status(404).send('Error deleting course');
    }
});
module.exports = router;