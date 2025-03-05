import { useEffect, useState } from "react"
import ProgressBar from "@ramonak/react-progress-bar"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ScaleLoader from "react-spinners/ScaleLoader";

import { getUserEnrolledCourses } from "../../../services/operations/profileAPI"

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);

  const [enrolledCourses, setEnrolledCourses] = useState([])
  const getEnrolledCourses = async () => {
    try {
        setLoading(true);
      const res = await getUserEnrolledCourses(token);
        
      setEnrolledCourses(res);
      setLoading(false);
    } catch (error) {
      console.log("Could not fetch enrolled courses.")
      setLoading(false);
    }
  };
  useEffect(() => {
    getEnrolledCourses();
  }, [])

  return (
    <>
      <div className="text-3xl text-richblack-50">Enrolled Courses</div>
      
      {
        loading?(
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            <ScaleLoader/>
        </div>
        ):
        !enrolledCourses ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not enrolled in any course yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div className="my-8 text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-lg bg-richblack-500 ">
            <p className="w-2/5 px-5 py-3 max-sm:text-xs max-sm:font-bold">Course Name</p>
            <p className="w-1/5 px-2 py-3 max-sm:text-xs max-sm:font-bold">Duration</p>
            <p className="flex-1 px-2 py-3 max-sm:text-xs max-sm:font-bold">Progress</p>
          </div>
          {/* Course Names */}
          {enrolledCourses.map((course, i, arr) => (
            <div
              className={`flex items-center border border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={i}
            >
           
              <div
                className="flex w-2/5 cursor-pointer items-center gap-4 px-5 py-3 max-sm:flex-col max-sm:items-start max-sm:text-xs   "
                onClick={() => {
                  navigate(
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSections?.[0]?._id}`
                  )
                }}
              >
                <img
                  src={course.thumbnail}
                  alt="course_img"
                  className="h-14 w-14 rounded-lg object-cover max-sm:h-10 max-sm:w-10"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold">{course.courseName}</p>
                  <p className="text-xs text-richblack-300">
                    {course.courseDescription.length > 50
                      ? `${course.courseDescription.slice(0, 50)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>
              <div className="w-1/5 px-2 py-3  max-sm:text-xs">{course?.totalDuration}</div>
              <div className="flex w-1/3 flex-col gap-2 px-2 py-3  max-sm:text-xs">
                <p>Progress: {course.progressPercentage || 0}%</p>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height="8px"
                  isLabelVisible={false}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}