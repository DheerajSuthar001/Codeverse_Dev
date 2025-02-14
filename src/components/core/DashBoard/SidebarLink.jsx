import React, { useState } from 'react'
import * as Icons from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation,matchPath } from 'react-router-dom';
function SidebarLink({link,iconName}) {
    const Icon=Icons[iconName];
    const location=useLocation();
    const dispatch=useDispatch();
    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname)
    }
  return (
    <NavLink to={link.path}
    className={`flex justify-center gap-2 ${matchRoute(link.path)? 'bg-yellow-800 border-l-2 border-l-yellow-200':' bg-opacity-0'} border-l`}>
        <Icon/>
        <span>{link.name}</span>
    </NavLink>
  )
}

export default SidebarLink