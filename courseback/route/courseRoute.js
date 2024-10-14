const express=require ('express');
const router=express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}));
const courseModel=require('../models/courseData')

router.get('/',async(req,res)=>{
    try {
        const courses=await courseModel.find()
        res.status(200).send(courses);
    } catch (error) {
        res.status(404).send('Course not found');
        
    }
});


router.post('/addCourse', async(req,res)=>{
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
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedCourse=await courseModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send('Course updated successfully');
    } catch (error) {
        res.status(404).send('Error updating course');
    }
});
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const deleteCourse=await courseModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send('Course deleted successfully');
    } catch (error) {
        res.status(404).send('Error deleting course');
    }
});
module.exports = router;