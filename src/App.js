import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Navbar from '../src/components/core/common/Navbar'
import OpenRoute from "./components/core/auth/OpenRoute"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from './pages/Error';
import PrivateRoute from "./components/core/auth/PrivateRoute";
import MyProfile from "./components/core/DashBoard/MyProfile";
import { useSelector } from "react-redux";
import EnrolledCourses from "./components/core/DashBoard/EnrolledCourses";
import Settings from './components/core/DashBoard/Settings'
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./components/core/DashBoard/AddCourse";
import MyCourses from "./components/core/DashBoard/MyCourses";
import EditCourse from "./components/core/DashBoard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import Cart from './components/core/Cart'
import Instructor from "./components/core/DashBoard/Instructor";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import { useState } from "react";
import HamMenu from "./components/core/common/HamMenu";
function App() {
  const { user } = useSelector(state => state.profile);
  const [hamMenu,setHamMenu]=useState(false)
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter  ">
      <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />
      {
        hamMenu && <HamMenu setHamMenu={setHamMenu}/>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
              </>
            )
          }


        </Route>
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
