import React from 'react'
import { useSelector } from 'react-redux'
import { ScaleLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/core/DashBoard/Sidebar';
function Dashboard() {
  const {loading:authLoading}=useSelector(state=>state.auth);
  const {loading:profileLoading}=useSelector(state=>state.profile);
  if(authLoading || profileLoading)
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <ScaleLoader />
    </div>
  )
  return(
    <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
      <Sidebar/>
      <div className='h-[calc(100vh-3.5rem)] overflow-auto'>
        <div className=' mx-auto w-8/12 max-w-[1000px] py-10'>
            <Outlet/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard