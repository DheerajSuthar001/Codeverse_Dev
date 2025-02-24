import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createSubSection, updateSubSection } from '../../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../../slices/courseSlice';
import { Form } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx"
import Upload from '../Upload';
import IconBtn from '../../../../core/common/IconBtn';
import { useSelector } from 'react-redux';

const SubSectionModal = ({
    modalData,
    setModalData,
    add = false,
    view = false,
    edit = false,
}) => {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        getValues,
    } = useForm();

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { course } = useSelector((state) => state.course);
    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        if (view || edit) {
            setValue("lectureTitle", modalData.title);
            setValue("lectureDesc", modalData.description);
            setValue("lectureVideo", modalData.videoUrl);
        }
    }, []);

    const isFormUpdated = () => {
        const currentValues = getValues();
        if (currentValues.lectureTitle !== modalData.title ||
            currentValues.lectureDesc !== modalData.description ||
            currentValues.lectureVideo !== modalData.videoUrl) {
            return true;
        }
        else {
            return false;
        }

    }
    const handleEditSubSection = async () => {

        const currentValues = getValues();
        const formData = new FormData();

        formData.append("sectionId", modalData.sectionId);
        formData.append("subSectionId", modalData._id);

        if (currentValues.lectureTitle !== modalData.title) {
            formData.append("title", currentValues.lectureTitle);
        }

        if (currentValues.lectureDesc !== modalData.description) {
            formData.append("description", currentValues.lectureDesc);
        }

        if (currentValues.lectureVideo !== modalData.videoUrl) {
            formData.append("video", currentValues.lectureVideo);
        }

        setLoading(true);
        //API call
        const result = await updateSubSection(formData, token);
        if (result) {
            const updatedCourseContent = course.courseContent.map((section) =>
                section._id === modalData.sectionId ? result : section
              )
              const updatedCourse = { ...course, courseContent: updatedCourseContent }
              dispatch(setCourse(updatedCourse))
        }
        setModalData(null);
        setLoading(false);
    }

    const onSubmit = async (data) => {

        if (view)
            return;

        if (edit) {
            if (!isFormUpdated) {
                toast.error("No changes made to the form")
            }
            else {
                //edit krdo store me 
                handleEditSubSection();
            }
            return;
        }

        //ADD

        const formData = new FormData();
        formData.append("sectionId", modalData);
        formData.append("title", data.lectureTitle);
        formData.append("description", data.lectureDesc);
        formData.append("video", data.lectureVideo);
        setLoading(true);
        //API CALL
        const result = await createSubSection(formData, token);

        if (result) {
            //TODO: check for updation
            const updatedCourseContent = course.courseContent.map((section) =>
                section._id === modalData ? result : section 
              )
              const updatedCourse = { ...course, courseContent: updatedCourseContent }
              
              dispatch(setCourse(updatedCourse))
        }
        setModalData(null);
        setLoading(false);

    }


    return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">

            <div className=' rounded-md bg-richblack-700'>
                <div className=' p-2 flex justify-between '>
                    <p>{view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture</p>
                    <button onClick={() => (!loading ? setModalData(null) : {})}>
                        <RxCross1 />
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=' bg-richblack-800 p-3'>
                    <Upload
                        name="lectureVideo"
                        label="Lecture Video"
                        register={register}
                        setValue={setValue}
                        errors={errors}
                        video={true}
                        viewData={view ? modalData.videoUrl : null}
                        editData={edit ? modalData.videoUrl : null}
                    />
                    <div className=' mt-5'>
                        <label>Lecture Title</label>
                        <input
                            id='lectureTitle'
                            placeholder='Enter Lecture Title'
                            {...register("lectureTitle", { required: true })}
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"

                        />
                        {errors.lectureTitle && (<span>
                            Lecture Title is required
                        </span>)}
                    </div>
                    <div className=' mt-5'>
                        <label>Lecture Description</label>
                        <textarea
                            id='lectureDesc'
                            placeholder='Enter Lecture Description'
                            {...register("lectureDesc", { required: true })}
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full min-h-[130px] rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                            
                        />
                        {
                            errors.lectureDesc && (<span>
                                Lecture Description is required
                            </span>)
                        }
                    </div>

                    {
                        !view && (
                            <div>
                                <IconBtn
                                    text={loading ? "Loading..." : edit ? "Save Changes" : "Save"}
                                    customClasses={`text-center flex gap-2 items-center text-[13px] px-6 py-3 bg-yellow-50 text-black rounded-lg shadow-[1px_1px_0px_0px_rgba(249,_115,_22,_0.5)]
                                    shadow-richblack-600 hover:scale-95 transition-all duration-200 font-[700]`}
                                />
                            </div>
                        )
                    }
                </form>
            </div>

        </div>
    )
}

export default SubSectionModal
//PAANI BREAK - 2min