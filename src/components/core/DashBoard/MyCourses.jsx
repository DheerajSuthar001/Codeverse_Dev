import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';
import IconBtn from '../common/IconBtn';
import { VscAdd } from 'react-icons/vsc';
import CoursesTable from './InstructorCourses/CoursesTable';
function MyCourses() {

    const {token}=useSelector(state=>state.auth);
    const  navigate=useNavigate();
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        const fetchCourses=async ()=>{
            const result= await fetchInstructorCourses(token);
            if(result){
                setCourses(result)
            }
        }
        fetchCourses();
    },[])
  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
          customClasses={`text-center flex gap-2 items-center text-[13px] px-6 py-3 bg-yellow-50 text-black rounded-lg shadow-[1px_1px_0px_0px_rgba(249,_115,_22,_0.5)]
            shadow-richblack-600 hover:scale-95 transition-all duration-200 font-[700]`}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}

export default MyCourses