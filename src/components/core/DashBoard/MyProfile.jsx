import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../core/common/IconBtn"
import { useDispatch } from "react-redux";
import { setUser } from "../../../slices/profileSlice"
export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 max-sm:px-4 max-sm:flex-col max-sm:gap-4 max-md:flex-col max-md:gap-6">
        <div className="flex items-center max-sm:flex-col gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] max-sm:w-[50px] rounded-full object-cover"
          />
          <div className="space-y-1 max-sm:text-center">
            <p className="text-lg max-sm:text-base  font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm max-sm:text-xs text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
          customClasses={`text-center flex max-md:w-[80%] max-sm:justify-center max-md:w-[80%] max-md:justify-center gap-2 items-center text-[13px] px-6 py-3 bg-yellow-50 text-black rounded-lg shadow-[1px_1px_0px_0px_rgba(249,_115,_22,_0.5)]
            shadow-richblack-600 hover:scale-95 transition-all duration-200 font-[700]`}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-10 flex gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12   max-md:flex-col max-md:gap-6 max-md:items-center">
        <div className="flex flex-col w-full gap-4 justify-between max-md:items-center">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <p
            className={`${user?.additionalDetails?.about
                ? "text-richblack-5"
                : "text-richblack-400"
              } text-sm font-medium`}
          >
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>

        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
          customClasses={`text-center flex justify-center h-fit  gap-2 items-center text-[13px] px-6 py-3 bg-yellow-50 text-black rounded-lg shadow-[1px_1px_0px_0px_rgba(249,_115,_22,_0.5)]
         shadow-richblack-600 hover:scale-95 max-md:w-[80%] transition-all duration-200 font-[700]`}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-10 flex flex-col lg:flex-row  max-md:items-center  gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 ">
        <div className="flex flex-col w-full  justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <div className="flex max-w-[500px] justify-between max-sm:flex-col ">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">First Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.firstName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Email</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.email}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Gender</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.lastName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
                <p className="text-sm font-medium text-richblack-5">
                  {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                    "Add Date Of Birth"}
                </p>
              </div>
            </div>
          </div>

        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
          customClasses={`text-center flex justify-center gap-2 items-center text-[13px] px-6 py-3 bg-yellow-50 text-black rounded-lg shadow-[1px_1px_0px_0px_rgba(249,_115,_22,_0.5)]
                shadow-richblack-600 hover:scale-95 transition-all duration-200 font-[700] max-md:w-[80%] lg:h-fit`}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
    </>
  )
}