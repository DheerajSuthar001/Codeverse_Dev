import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import IconBtn from '../../../../core/common/IconBtn';
import {MdAddCircleOutline} from "react-icons/md"
import {BiAddToQueue} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import {BiRightArrow} from "react-icons/bi"
import { setCourse, setEditCourse, setStep } from '../../../../../slices/courseSlice';
import { toast } from 'react-toastify';
import { createSection, updateSection } from '../../../../../services/operations/courseDetailsAPI';
import NestedView from './NestedView';

const CourseBuilderForm = () => {

  const {register, handleSubmit, setValue, formState:{errors} } = useForm();
  const [editSectionName, setEditSectionName] = useState(null);
  const {course} = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("UPDATED");
  }, [course])



  const onSubmit = async (data) => {
    setLoading(true);
    let result;

    if(editSectionName) {
      //we are editing the secgtion name
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        }, token
      )
    }
    else {
      result = await createSection({
        sectionName: data.sectionName,
        courseId: course._id,
      },token)
    }
    
    //update values
    if(result) {
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName", "");
    }

    //loading false
    setLoading(false);
  }

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  }

  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  }

  const goToNext= () => {
    if(course?.courseContent?.length === 0) {
      toast.error("Please add atleast one Section");
      return;
    }
    if(course.courseContent.some((section) => section.subSections.length === 0)) {
      toast.error("Please add atleast one lecture in each section");
      return;
    }
    //if everything is good
    dispatch(setStep(3));
  }

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if(editSectionName === sectionId ){
      cancelEdit();
      return;
    }
    
    setEditSectionName(sectionId);
    setValue("sectionName", sectionName);
  }

  return (
    <div className='text-white'>
      <p>Course Builder</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='sectionName'>Section name <sup>*</sup></label>
          <input 
            id='sectionName'
            placeholder='Add section name'
            {...register("sectionName", {required:true})}
            style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
          {errors.sectionName && (
            <span>Section Name is required</span>
          )}
        </div>
        <div className='mt-10 flex w-full'>
          <IconBtn 
            type="Submit"
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
            customClasses={"text-yellow-50 flex gap-2 items-center border-2 border-yellow-50 px-3 py-1 rounded-md"}
          >
            <MdAddCircleOutline className='text-yellow-50' size={20}/>

          </IconBtn>
          {editSectionName && (
            <button
            type='button'
            onClick={cancelEdit}
            className='text-sm text-richblack-300 underline ml-10'
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
          
      {course?.courseContent?.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )}

      <div className='flex justify-end gap-x-3 mt-10'>
        <button
        onClick={goBack}
        className='rounded-md cursor-pointer flex items-center '>
          Back
        </button>
        <IconBtn text="Next" onclick={goToNext} customClasses={`text-center flex gap-2 items-center text-[13px] px-6 py-3 bg-yellow-50 text-black rounded-lg shadow-[1px_1px_0px_0px_rgba(249,_115,_22,_0.5)]
            shadow-richblack-600 hover:scale-95 transition-all duration-200 font-[700]`}>
          <BiRightArrow />
        </IconBtn>

      </div>
      



    </div>
  )
}

export default CourseBuilderForm
