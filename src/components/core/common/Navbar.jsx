import React, { useEffect, useState } from 'react'
import { Link, matchPath, NavLink } from 'react-router-dom';
import logo from '../../../assets/Logo/LogoMainDark.png';
import { NavbarLinks } from '../../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ProfileDropDown from '../auth/ProfileDropDown';
import { apiConnector } from '../../../services/apiConnector';
import { categories } from '../../../services/apis';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import ProfileDropdown from '../auth/ProfileDropDown';
function Navbar() {

    const { token } = useSelector((state) => state.auth);
    // console.log('token is',token);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);

    // const subLinks=[
    //     {
    //         title:'Python',
    //         link:'/catalog/python'
    //     },
    //     {
    //         title:'Web Dev',
    //         link:'/catalog/web-dev'
    //     }
    // ]
    const [subLinks, setSubLinks] = useState([]);
    const fetchSubLinks = async () => {
        try {
            let response = await apiConnector('GET', categories.CATEGORIES_API);
            console.log(response.data.data);
            setSubLinks(response.data.data);
        } catch (error) {
            console.log('Cannot fetch categories list', error)
        }
    }
    useEffect(() => {
        fetchSubLinks();
    }, [])
    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className='flex justify-center h-14 items-center border-b-[1px] border-richblack-700'>
            <div className='flex w-8/12  justify-between items-center' >
                <Link to='/'>
                    <img src={logo} alt='SiteLogo' width='160' height='32'></img>
                </Link>
                <div className='flex gap-5 justify-between text-white'>
                    {
                        NavbarLinks.map((link, index) => {

                            return link.title === 'Catalog' ? (
                                <div key={index} className='relative flex gap-2 items-center group cursor-pointer z-0 '>
                                    <p>Catalog</p>
                                    <IoIosArrowDropdownCircle />
                                    <div className='invisible translate-x-[-50%] translate-y-[20%] absolute left-[50%] top-[10%] flex flex-col rounded-md bg-richblack-5 text-richblack-900 opacity-0 hover:visible transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[200px] ' >
                                        <div className='absolute translate-x-[50%]  left-[52%] top-0 translate-y-[-10%] h-3 w-3 rotate-45 rounded bg-richblack-5 -z-[1] '></div>
                                        {
                                            subLinks.length ? (
                                                subLinks.map((ele, index) => {
                                                    return <Link key={index} className='py-2 px-3 rounded-md hover:bg-richblack-50' to={ele.link}>{ele.name}</Link>
                                                })
                                            ) : (
                                                <div></div>
                                            )
                                        }
                                    </div>
                                </div>
                            ) : (
                                <NavLink key={index} className={matchRoute(link.path) ? 'text-yellow-50' : 'text-white'} to={link.path}>{link.title}</NavLink>
                            )
                        })
                    }
                </div>
                <div className='flex gap-4 items-center text-white'>
                    {
                        user && user?.accountType !== 'Instructor' && (
                            <Link to="/dashboard/cart" className='relative'>
                                <AiOutlineShoppingCart />
                                {totalItems > 0 && (
                                    <span className='absolute'>{totalItems}</span>
                                )}
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to='/login'>
                                <button className='border-[1px] border-richblack-700 py-2 px-4 rounded-md bg-richblack-800'>Login</button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to='/signup'>
                                <button className='border-[1px] border-richblack-700 py-2 px-4 rounded-md bg-richblack-800'>Sign Up</button>
                            </Link>
                        )
                    }
                    {
                        token !== null && (
                            <ProfileDropdown />
                        )
                    }
                </div>
            </div>
        </div>
    )
}


export default Navbar