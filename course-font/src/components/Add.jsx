import { Button, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';
import Nav from './Nav';

const Add = () => {
    // array and function for drop down menu
    // const courseCategories = [
    //     { value: 'irp', label: 'Industry Readiness Program' },
    //     { value: 'smp', label: 'Six Month Program' },
    //     { value: 'upskilling', label: 'Upskilling Program' },
    //   ];
    //   const [category, setCategory] = useState('');

    //   const handleChange = (event) => {
    //     setCategory(event.target.value);
    //     fetchValue(event);     
    //   };





      //array and function to submit data
      const[course,setCourse]=useState({courseName:'',courseDescription:'',courseCategory:'',courseId:'',courseFee:''})

      const fetchValue=(event)=>{
      setCourse({...course,[event.target.name]: event.target.value});
      }
      
  



      
      const Navigate=useNavigate()
      const location=useLocation()
      const sendData=()=>{
        if(location.state!=null){
          axiosInstance.put('http://localhost:3000/course/edit/'+location.state.course._id,course)
          .then((res)=>{
            alert('Data updated');
            Navigate('/home')

          }).catch((error)=>{
            console.log(error);
          })
        }
        else{
          axiosInstance.post('http://localhost:3000/course/addCourse',course).then((res)=>{
            Navigate('/home')
          }).catch((error)=>{
            console.log(error)
          })
        }

      }
      useEffect(()=>{
        if(location.state!=null){
          setCourse({
            ...course,
            courseId:location.state.course.courseId,
            courseName:location.state.course.courseName,
            courseCategory:location.state.course.courseCategory,
            courseDescription:location.state.course.courseDescription,
            courseFee:location.state.course.courseFee,
            courseImage:location.state.course.courseImage

          })
        }
      },[])

     return (
      <>
      <Nav/>
      <div>
        <br />
        <h2>Add Course</h2><br />
        <TextField id="outlined-basic" label="Course ID" variant="outlined"onChange={fetchValue} name="courseId" value={course.courseId} /><br />
        <TextField  id="outlined-basic" label="Course Name" variant="outlined" onChange={fetchValue} name="courseName" value={course.courseName} /><br />
    
        <TextField id="outlined-basic"  label="Course Category"  onChange={fetchValue} variant="outlined" value={course.courseCategory} name="courseCategory" >
        
      
        </TextField><br />
        <TextField
        fullWidth 
          id="outlined-textarea-basic"
          label="Course Description"
          multiline onChange={fetchValue} value={course.courseDescription} name="courseDescription"/><br />
        <TextField  id="outlined-basic" label="Course Fee" variant="outlined" value={course.courseFee} onChange={fetchValue} name="courseFee" /><br />
        <TextField  id="outlined-basic" label="Course image" variant="outlined" onChange={fetchValue} name="courseImage" value={course.courseImage} /><br /><br />
        <Button variant="contained" sx={{backgroundColor:'#96D0E2',color:'white', margin:2}} onClick={sendData}>Add Course</Button>
    </div>
    </>
  )
}

export default Add